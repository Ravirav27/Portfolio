import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import GlareHover from "@/components/effects/GlareHover";
import LightRaysEffect from "@/components/effects/LightRaysEffect";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          subject: formData.get('subject'),
          message: formData.get('message'),
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thanks for reaching out. I'll get back to you soon!",
        });
        if (formRef.current) {
          formRef.current.reset();
        }
      } else {
        throw new Error(data.error || 'Failed to send email');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Light Rays Background Effect */}
      <div className="absolute inset-0 z-0">
        <LightRaysEffect
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
        />
      </div>

      <div className="container px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            <span className="text-gradient">Get In Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 text-center">
            Have a project in mind? Let's talk about it!
          </p>

          <div className="flex justify-center mb-12">
            <GlareHover
              width="400px"
              height="120px"
              background="rgba(0, 0, 0, 0.3)"
              borderRadius="16px"
              borderColor="#a78bfa"
              glareColor="#7df9ff"
              glareOpacity={0.4}
              glareAngle={-30}
              glareSize={300}
              transitionDuration={800}
              playOnce={false}
              className="flex items-center justify-center"
            >
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-gradient">
                  Let's Connect
                </h3>
              </div>
            </GlareHover>
          </div>

          <motion.form
            ref={formRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="glass rounded-2xl p-8 space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                  className="glass"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  required
                  className="glass"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">
                Subject
              </label>
              <Input
                id="subject"
                name="subject"
                placeholder="What's this about?"
                required
                className="glass"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell me about your project..."
                rows={6}
                required
                className="glass resize-none"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full glow-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  <Send className="mr-2 w-5 h-5" />
                  Send Message
                </>
              )}
            </Button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
