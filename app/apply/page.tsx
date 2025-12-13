"use client";
import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { UploadCloud, Send, CheckCircle, Loader2, FileText, ArrowLeft } from "lucide-react";
import Link from "next/link";
// 👇 FIX: Changed from "@/" to relative path to match your other files
import Navbar from "../../components/Navbar"; 

function ApplyForm() {
  const searchParams = useSearchParams();
  const role = searchParams.get("role") || "General Application";

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    // ⚠️ REPLACE WITH YOUR ACTUAL WEB3FORMS ACCESS KEY
    formData.append("access_key", "YOUR-ACCESS-KEY-HERE"); 
    formData.append("subject", `New Job Application: ${role}`);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-lg w-full bg-[#0A0A0A] border border-white/10 p-12 rounded-[2.5rem] text-center"
        >
          <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-green-500">
            <CheckCircle className="w-10 h-10" />
          </div>
          <h3 className="text-3xl font-bold text-white mb-4">Application Sent!</h3>
          <p className="text-gray-400 mb-8">
            Thanks for applying to Webartist. We will review your CV and get back to you soon.
          </p>
          <Link href="/careers" className="text-blue-400 hover:text-white transition-colors">
            Return to Careers
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <Navbar />
      
      <div className="max-w-3xl mx-auto px-6 pt-32 pb-20">
        
        <Link href="/careers" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
           <ArrowLeft size={16} className="mr-2" /> Back to Careers
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#0A0A0A] border border-white/10 p-8 md:p-12 rounded-[2rem]"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Join the Team</h1>
          <p className="text-gray-400 mb-8">Applying for: <span className="text-blue-400 font-medium">{role}</span></p>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            <input type="hidden" name="position" value={role} />

            {/* Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 ml-1">Full Name</label>
                <input required type="text" name="name" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 ml-1">Email Address</label>
                <input required type="email" name="email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all" />
              </div>
            </div>

            {/* Portfolio Link */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400 ml-1">Portfolio / LinkedIn / GitHub</label>
              <input type="url" name="portfolio" placeholder="https://..." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all" />
            </div>

            {/* CV Upload Area */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400 ml-1">Upload CV (PDF)</label>
              <div className="relative group">
                <input 
                  type="file" 
                  name="attachment" 
                  accept=".pdf,.doc,.docx"
                  required 
                  onChange={handleFileChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" 
                />
                <div className="w-full bg-white/5 border border-dashed border-white/20 rounded-xl p-8 flex flex-col items-center justify-center group-hover:bg-white/10 group-hover:border-blue-500/50 transition-all">
                  {fileName ? (
                    <>
                      <FileText className="w-8 h-8 text-blue-400 mb-2" />
                      <span className="text-white font-medium">{fileName}</span>
                      <span className="text-xs text-green-400 mt-1">Ready to upload</span>
                    </>
                  ) : (
                    <>
                      <UploadCloud className="w-8 h-8 text-gray-400 mb-2 group-hover:text-white transition-colors" />
                      <span className="text-gray-300 font-medium">Click to upload CV</span>
                      <span className="text-xs text-gray-500 mt-1">PDF or DOCX (Max 5MB)</span>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400 ml-1">Why do you want to join us?</label>
              <textarea required name="message" rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all resize-none" />
            </div>

            <button 
              type="submit" 
              disabled={status === "submitting"}
              className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-gray-200 transition-all flex items-center justify-center gap-2"
            >
              {status === "submitting" ? <Loader2 className="animate-spin" /> : <>Submit Application <Send size={18} /></>}
            </button>
            
            {status === "error" && <p className="text-red-400 text-center text-sm">Something went wrong. Please try again.</p>}
          </form>
        </motion.div>
      </div>
    </div>
  );
}

// Wrap in Suspense for Next.js build safety
export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black flex items-center justify-center text-white">Loading...</div>}>
      <ApplyForm />
    </Suspense>
  );
}