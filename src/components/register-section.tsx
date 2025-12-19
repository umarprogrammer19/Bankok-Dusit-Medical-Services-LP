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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Form submitted:", formData)
    }

    return (
        <Wrapper>
            <section id="register" className="bg-[#f8fbfd] pb-16 md:pb-28 w-full md:w-[90%] mx-auto">
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
                                <SelectTrigger className="bg-white border-[#d1e3f0] w-full rounded-lg h-12 text-[17px] text-[#949494] data-[state=open]:text-[#1a365d] py-6 cursor-pointer">
                                    <SelectValue placeholder="Where are you located?" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="dubai">Dubai</SelectItem>
                                    <SelectItem value="abudhabi">Abu Dhabi</SelectItem>
                                    <SelectItem value="sharjah">Sharjah</SelectItem>
                                    <SelectItem value="riyadh">Riyadh</SelectItem>
                                    <SelectItem value="jeddah">Jeddah</SelectItem>
                                </SelectContent>
                            </Select>

                            <Select onValueChange={(value) => setFormData({ ...formData, venue: value })}>
                                <SelectTrigger className="bg-white border-[#d1e3f0] w-full rounded-lg h-12 text-[17px] text-[#949494] data-[state=open]:text-[#1a365d] py-6 cursor-pointer">
                                    <SelectValue placeholder="Choose your venue" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="venue1">Dubai Convention Center</SelectItem>
                                    <SelectItem value="venue2">Abu Dhabi National Exhibition</SelectItem>
                                    <SelectItem value="venue3">Riyadh International Convention</SelectItem>
                                </SelectContent>
                            </Select>

                            <Select onValueChange={(value) => setFormData({ ...formData, speciality: value })}>
                                <SelectTrigger className="bg-white border-[#d1e3f0] w-full rounded-lg h-12 text-[17px] text-[#949494] data-[state=open]:text-[#1a365d] py-6 cursor-pointer">
                                    <SelectValue placeholder="Speciality" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="pediatrics">Pediatrics</SelectItem>
                                    <SelectItem value="cancer">Cancer</SelectItem>
                                    <SelectItem value="brain">Brain</SelectItem>
                                    <SelectItem value="heart">Heart</SelectItem>
                                    <SelectItem value="orthopedics">Orthopedics</SelectItem>
                                    <SelectItem value="rehabilitation">Rehabilitation</SelectItem>
                                    <SelectItem value="urology">Urology</SelectItem>
                                    <SelectItem value="wellness">Wellness</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Submit Button */}
                        <div className="md:text-center">
                            <Button
                                type="submit"
                                className="bg-[#ED1C24] hover:bg-[#c91920] text-white px-10 md:px-14 py-5 md:py-6 cursor-pointer text-base md:text-lg rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
                            >
                                SIGN UP
                            </Button>
                        </div>
                    </form>
                </div>
            </section>
        </Wrapper>
    )
}
