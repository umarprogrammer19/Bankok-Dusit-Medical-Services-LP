"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Wrapper from "./wrapper"

export function RegisterSection() {
    const [formData, setFormData] = useState({
        name: "",
        mobile: "",
        email: "",
        location: "",
        venue: "",
        speciality: "",
    })
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            // Validate required fields
            if (!formData.name || !formData.mobile || !formData.email) {
                setSubmitStatus({ type: 'error', message: 'Name, Mobile, and Email are required fields' });
                return;
            }

            // Validate email format
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                setSubmitStatus({ type: 'error', message: 'Please enter a valid email address' });
                return;
            }

            // Send data to Google Sheets via Apps Script
            const response = await fetch('https://script.google.com/macros/s/AKfycbw8ba430EJHzL9FyCMRsglfA0W_xtW9H3_ItQVgoXnDhSFVqYPAW9O9P5YaoUi7BYbWCw/exec', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    name: formData.name,
                    mobile: formData.mobile,
                    email: formData.email,
                    located: formData.location,
                    venue: formData.venue,
                    speciality: formData.speciality,
                }).toString(),
            });

            const result = await response.json();

            if (result.error) {
                setSubmitStatus({ type: 'error', message: result.error });
            } else {
                setSubmitStatus({ type: 'success', message: 'Form submitted successfully!' });
                // Reset form after successful submission
                setFormData({
                    name: "",
                    mobile: "",
                    email: "",
                    location: "",
                    venue: "",
                    speciality: "",
                });
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus({ type: 'error', message: 'An error occurred while submitting the form. Please try again.' });
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <Wrapper>
            <section id="register" className="bg-[#f8fbfd] pb-16 lg:pb-28 w-full md:w-[90%] mx-auto">
                <div className="container mx-auto sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0C73B5] text-center mb-8 md:mb-10">
                        Register Your Interest
                    </h2>

                    <form onSubmit={handleSubmit} className="max-w-6xl mx-auto">
                        {/* First Row - Text Inputs */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                            <Input
                                placeholder="Enter your name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="bg-white border-[#d1e3f0] rounded-lg h-12 text-sm placeholder:text-[#949494] placeholder:text-[17px]"
                            />
                            <Input
                                placeholder="Enter your mobile"
                                value={formData.mobile}
                                onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                                className="bg-white border-[#d1e3f0] rounded-lg h-12 text-sm placeholder:text-[#949494] placeholder:text-[17px]"
                            />
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="bg-white border-[#d1e3f0] rounded-lg h-12 text-sm placeholder:text-[#949494] placeholder:text-[17px]"
                            />
                        </div>

                        {/* Second Row - Select Dropdowns */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                            <Select onValueChange={(value) => setFormData({ ...formData, location: value })}>
                                <SelectTrigger className="bg-white border-[#d1e3f0] w-full rounded-lg h-12 text-[17px] text-[#949494] data-[state=open]:text-[#1a365d] data-placeholder:text-[#949494] data-placeholder:font-normal data-[state=open]:border-[#0C73B5] data-[state=closed]:border-[#d1e3f0] transition-all duration-200 hover:border-[#0C73B5] focus:ring-2 focus:ring-[#0C73B5]/30 py-6 focus:outline-none data-[state=open]:bg-[#f8fbfd]">
                                    <SelectValue placeholder="Where are you located?" />
                                </SelectTrigger>
                                <SelectContent className="bg-white border-[#d1e3f0] rounded-lg shadow-lg p-2 max-h-60 overflow-auto z-100">
                                    <SelectItem value="abudhabi" className="py-2 px-2 rounded-md data-highlighted:bg-[#f0f7ff] data-highlighted:text-[#0C73B5] data-[state=checked]:bg-[#e6f2ff] data-[state=checked]:text-[#0C73B5] transition-colors cursor-pointer">Abu Dhabi</SelectItem>
                                    <SelectItem value="dubai" className="py-2 px-2 rounded-md data-highlighted:bg-[#f0f7ff] data-highlighted:text-[#0C73B5] data-[state=checked]:bg-[#e6f2ff] data-[state=checked]:text-[#0C73B5] transition-colors cursor-pointer">Dubai</SelectItem>
                                    <SelectItem value="fujairah" className="py-2 px-2 rounded-md data-highlighted:bg-[#f0f7ff] data-highlighted:text-[#0C73B5] data-[state=checked]:bg-[#e6f2ff] data-[state=checked]:text-[#0C73B5] transition-colors cursor-pointer">Fujairah</SelectItem>
                                    <SelectItem value="ras-alkhaimah" className="py-2 px-2 rounded-md data-highlighted:bg-[#f0f7ff] data-highlighted:text-[#0C73B5] data-[state=checked]:bg-[#e6f2ff] data-[state=checked]:text-[#0C73B5] transition-colors cursor-pointer">Ras Al Khaimah</SelectItem>
                                    <SelectItem value="ajman" className="py-2 px-2 rounded-md data-highlighted:bg-[#f0f7ff] data-highlighted:text-[#0C73B5] data-[state=checked]:bg-[#e6f2ff] data-[state=checked]:text-[#0C73B5] transition-colors cursor-pointer">Ajman</SelectItem>
                                    <SelectItem value="sharjah" className="py-2 px-2 rounded-md data-highlighted:bg-[#f0f7ff] data-highlighted:text-[#0C73B5] data-[state=checked]:bg-[#e6f2ff] data-[state=checked]:text-[#0C73B5] transition-colors cursor-pointer">Sharjah</SelectItem>
                                </SelectContent>
                            </Select>

                            <Select onValueChange={(value) => setFormData({ ...formData, venue: value })}>
                                <SelectTrigger className="bg-white border-[#d1e3f0] w-full rounded-lg h-12 text-[17px] py-6 text-[#949494] data-[state=open]:text-[#1a365d] data-placeholder:text-[#949494] data-placeholder:font-normal data-[state=open]:border-[#0C73B5] data-[state=closed]:border-[#d1e3f0] transition-all duration-200 hover:border-[#0C73B5] focus:ring-2 focus:ring-[#0C73B5]/30 focus:outline-none">
                                    <SelectValue placeholder="Choose your venue" />
                                </SelectTrigger>
                                <SelectContent className="bg-white border-[#d1e3f0] rounded-lg shadow-lg p-2 max-h-60 overflow-auto z-100">
                                    <SelectItem value="venue1" className="py-2 px-2 rounded-md data-highlighted:bg-[#f0f7ff] data-highlighted:text-[#0C73B5] data-[state=checked]:bg-[#e6f2ff] data-[state=checked]:text-[#0C73B5] transition-colors cursor-pointer">Abu Dhabi 24th January</SelectItem>
                                    <SelectItem value="venue2" className="py-2 px-2 rounded-md data-highlighted:bg-[#f0f7ff] data-highlighted:text-[#0C73B5] data-[state=checked]:bg-[#e6f2ff] data-[state=checked]:text-[#0C73B5] transition-colors cursor-pointer">Dubai 25th January</SelectItem>
                                </SelectContent>
                            </Select>

                            <Select onValueChange={(value) => setFormData({ ...formData, speciality: value })}>
                                <SelectTrigger className="bg-white border-[#d1e3f0] w-full rounded-lg h-12 text-[17px] py-6 text-[#949494] data-[state=open]:text-[#1a365d] data-placeholder:text-[#949494] data-placeholder:font-normal data-[state=open]:border-[#0C73B5] data-[state=closed]:border-[#d1e3f0] transition-all duration-200 hover:border-[#0C73B5] focus:ring-2 focus:ring-[#0C73B5]/30 focus:outline-none data-[state=open]:bg-[#f8fbfd]">
                                    <SelectValue placeholder="Speciality" />
                                </SelectTrigger>
                                <SelectContent className="bg-white border-[#d1e3f0] rounded-lg shadow-lg p-2 max-h-60 overflow-auto z-100">
                                    <SelectItem value="pediatrics" className="py-2 px-2 rounded-md data-highlighted:bg-[#f0f7ff] data-highlighted:text-[#0C73B5] data-[state=checked]:bg-[#e6f2ff] data-[state=checked]:text-[#0C73B5] transition-colors cursor-pointer">Pediatrics</SelectItem>
                                    <SelectItem value="cancer" className="py-2 px-2 rounded-md data-highlighted:bg-[#f0f7ff] data-highlighted:text-[#0C73B5] data-[state=checked]:bg-[#e6f2ff] data-[state=checked]:text-[#0C73B5] transition-colors cursor-pointer">Cancer</SelectItem>
                                    <SelectItem value="brain" className="py-2 px-2 rounded-md data-highlighted:bg-[#f0f7ff] data-highlighted:text-[#0C73B5] data-[state=checked]:bg-[#e6f2ff] data-[state=checked]:text-[#0C73B5] transition-colors cursor-pointer">Brain</SelectItem>
                                    <SelectItem value="heart" className="py-2 px-2 rounded-md data-highlighted:bg-[#f0f7ff] data-highlighted:text-[#0C73B5] data-[state=checked]:bg-[#e6f2ff] data-[state=checked]:text-[#0C73B5] transition-colors cursor-pointer">Heart</SelectItem>
                                    <SelectItem value="orthopedics" className="py-2 px-2 rounded-md data-highlighted:bg-[#f0f7ff] data-highlighted:text-[#0C73B5] data-[state=checked]:bg-[#e6f2ff] data-[state=checked]:text-[#0C73B5] transition-colors cursor-pointer">Orthopedics & Trauma</SelectItem>
                                    <SelectItem value="children" className="py-2 px-2 rounded-md data-highlighted:bg-[#f0f7ff] data-highlighted:text-[#0C73B5] data-[state=checked]:bg-[#e6f2ff] data-[state=checked]:text-[#0C73B5] transition-colors cursor-pointer">Children</SelectItem>
                                    <SelectItem value="urology" className="py-2 px-2 rounded-md data-highlighted:bg-[#f0f7ff] data-highlighted:text-[#0C73B5] data-[state=checked]:bg-[#e6f2ff] data-[state=checked]:text-[#0C73B5] transition-colors cursor-pointer">Urology</SelectItem>
                                    <SelectItem value="wellness" className="py-2 px-2 rounded-md data-highlighted:bg-[#f0f7ff] data-highlighted:text-[#0C73B5] data-[state=checked]:bg-[#e6f2ff] data-[state=checked]:text-[#0C73B5] transition-colors cursor-pointer">Wellness</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Submit Button */}
                        <div className="md:text-center">
                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="bg-[#ED1C24] hover:bg-[#c91920] text-white px-10 md:px-14 py-5 md:py-6 cursor-pointer text-base md:text-lg rounded-full font-semibold shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? 'SUBMITTING...' : 'SIGN UP'}
                            </Button>
                        </div>

                        {/* Status Messages */}
                        {submitStatus && (
                            <div className={`mt-4 p-4 rounded-lg text-center ${submitStatus.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                {submitStatus.message}
                            </div>
                        )}
                    </form>
                </div>
            </section>
        </Wrapper>
    )
}
