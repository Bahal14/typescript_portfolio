import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Send, Github, Linkedin, Instagram, Mail, User, MessageSquare } from 'lucide-react';
import { toast } from 'sonner';

interface Comment {
  id: number;
  name: string;
  message: string;
  date: string;
}

const socialLinks = [
  {
    icon: Github,
    href: 'https://github.com/Bahal14',
    label: 'GitHub',
    color: 'hover:bg-gray-800',
  },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/asbahal-munawaroh-41b121353?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    label: 'LinkedIn',
    color: 'hover:bg-blue-600',
  },
  {
    icon: Instagram,
    href: 'https://www.instagram.com/halmnaw._?igsh=eXI3Z2t6NTZmaHk2',
    label: 'Instagram',
    color: 'hover:bg-pink-600',
  },
];

const ContactSection = () => {
  const [emailForm, setEmailForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [commentForm, setCommentForm] = useState({
    name: '',
    message: '',
  });
  const [comments, setComments] = useState<Comment[]>([]);

  const handleEmailSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Using Web3Forms - you need to get your own access key from https://web3forms.com
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_ACCESS_KEY', // Replace with your Web3Forms access key
          to: 'asbahalmunawaroh@gmail.com',
          from_name: emailForm.name,
          reply_to: emailForm.email,
          subject: emailForm.subject || 'New Contact Form Submission',
          message: `Name: ${emailForm.name}\nEmail: ${emailForm.email}\nSubject: ${emailForm.subject}\n\nMessage:\n${emailForm.message}`,
        }),
      });

      const data = await response.json();

      if (data.success) {
        toast.success('Pesan berhasil dikirim!');
        setEmailForm({ name: '', email: '', subject: '', message: '' });
      } else {
        toast.error('Gagal mengirim pesan. Silakan coba lagi.');
      }
    } catch (error) {
      toast.error('Terjadi kesalahan. Silakan coba lagi.');
    }

    setIsSubmitting(false);
  };

  const handleCommentSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (!commentForm.name.trim() || !commentForm.message.trim()) {
      toast.error('Please fill in all fields');
      return;
    }

    const newComment: Comment = {
      id: Date.now(),
      name: commentForm.name,
      message: commentForm.message,
      date: new Date().toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      }),
    };

    setComments([newComment, ...comments]);
    setCommentForm({ name: '', message: '' });
    toast.success('Comment added!');
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title mb-4">GET IN TOUCH</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Email Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="card-glass p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Mail className="text-primary" size={20} />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground">
                  Send Me a Message
                </h3>
              </div>

              <form onSubmit={handleEmailSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={emailForm.name}
                    onChange={(e) => setEmailForm({ ...emailForm, name: e.target.value })}
                    className="input-field"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={emailForm.email}
                    onChange={(e) => setEmailForm({ ...emailForm, email: e.target.value })}
                    className="input-field"
                    required
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  value={emailForm.subject}
                  onChange={(e) => setEmailForm({ ...emailForm, subject: e.target.value })}
                  className="input-field"
                  required
                />
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  value={emailForm.message}
                  onChange={(e) => setEmailForm({ ...emailForm, message: e.target.value })}
                  className="input-field resize-none"
                  required
                />
                <motion.button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Right Side - Social & Comments */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Connect With Me */}
            <div className="card-glass p-8">
              <h3 className="text-xl font-display font-bold text-foreground mb-6">
                Connect With Me
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-14 h-14 rounded-xl flex items-center justify-center border border-primary/30 text-foreground transition-all duration-300 ${link.color} hover:text-white hover:border-transparent`}
                    whileHover={{ scale: 1.1, y: -3 }}
                  >
                    <link.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Comment Form */}
            <div className="card-glass p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <MessageSquare className="text-primary" size={20} />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground">
                  Leave a Comment
                </h3>
              </div>

              <form onSubmit={handleCommentSubmit} className="space-y-4">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={commentForm.name}
                    onChange={(e) => setCommentForm({ ...commentForm, name: e.target.value })}
                    className="input-field pl-10"
                  />
                </div>
                <textarea
                  placeholder="Write your comment..."
                  rows={3}
                  value={commentForm.message}
                  onChange={(e) => setCommentForm({ ...commentForm, message: e.target.value })}
                  className="input-field resize-none"
                />
                <motion.button
                  type="submit"
                  className="btn-outline w-full"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Post Comment
                </motion.button>
              </form>

              {/* Comments List */}
              {comments.length > 0 && (
                <div className="mt-6 space-y-4 max-h-64 overflow-y-auto">
                  {comments.map((comment) => (
                    <motion.div
                      key={comment.id}
                      className="p-4 bg-secondary/30 rounded-lg border border-primary/10"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-foreground">{comment.name}</span>
                        <span className="text-xs text-muted-foreground">{comment.date}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{comment.message}</p>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mb-8" />
          <p className="text-muted-foreground text-sm">
            © 2024 <span className="text-primary">Asbahal Munawaroh</span>. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Built with React, Tailwind CSS & ❤️
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
