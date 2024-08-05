import { LabelInputContainer } from '@/components/example/signup-form-demo'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'

type Props = {}

const ProfilePage = (props: Props) => {
  return (
    <div className='w-full p-5'>

      <div className='md:flex justify-between '>

        <div className="headingDashboard font-semibold text-3xl mb-16">
          Profile <span className='font-light text-base px-1 opacity-45'>My Profile</span>
        </div>

        <div className="verifiedBadge p-10">
          <Card className='rounded-lg overflow-hidden font-semibold text-lg w-full md:w-[320px] '>
            <CardHeader className='bg-green-500 text-white'>
              Profile Status
            </CardHeader>
            <CardContent>
              Verified
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="form ">
        <Card className='rounded-xl overflow-hidden text-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mb-16'>
          <CardHeader className='bg-green-500'>
            <div className='font-bold text-lg'>Edit Profile</div>
            <div className=''>Complete your profile</div>
          </CardHeader>
          <CardContent>

            <form className="my-8" >
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">

                <LabelInputContainer>
                  <Label htmlFor="Username">Username</Label>
                  <Input id="Username" placeholder="Username" type="text" />
                </LabelInputContainer>
                <LabelInputContainer>
                  <Label htmlFor="Mobile Number">Mobile Number</Label>
                  <Input id="Mobile Number" placeholder="Mobile Number" type="tel" />
                </LabelInputContainer>

              </div>

              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">

                <LabelInputContainer>
                  <Label htmlFor="Full Name">Full Name</Label>
                  <Input id="Full Name" placeholder="Full Name" type="text" />
                </LabelInputContainer>
                <LabelInputContainer>
                  <Label htmlFor="Email">Email</Label>
                  <Input id="Email" placeholder="Email" type="email" />
                </LabelInputContainer>

              </div>

              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">

                <LabelInputContainer>
                  <Label htmlFor="Gender">Gender</Label>
                  <Select>
                    <SelectTrigger className=" w-flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent 
          file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
          focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600
           disabled:cursor-not-allowed disabled:opacity-50
           dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
           group-hover/input:shadow-none transition duration-400">
                      <SelectValue placeholder="Select a gender" />
                    </SelectTrigger>
                    <SelectContent className=''>
                      <SelectItem value="male">male</SelectItem>
                      <SelectItem value="female">female</SelectItem>
                    </SelectContent>
                  </Select>
                </LabelInputContainer>
                <LabelInputContainer>
                  <Label htmlFor="Date of Birth">Date of Birth</Label>
                  <Input id="Date of Birth" placeholder="date/month/year" type="text" />
                </LabelInputContainer>

              </div>

              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">

                <LabelInputContainer>
                  <Label htmlFor="Gender">Country</Label>
                  <Select>
                    <SelectTrigger className=" w-flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent 
          file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
          focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600
           disabled:cursor-not-allowed disabled:opacity-50
           dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
           group-hover/input:shadow-none transition duration-400">
                      <SelectValue placeholder="Select a country" />
                    </SelectTrigger>
                    <SelectContent className=''>
                      <SelectItem value="India">India(+91)</SelectItem>
                    </SelectContent>
                  </Select>
                </LabelInputContainer>
                <LabelInputContainer>
                  <Label htmlFor="City">City</Label>
                  <Input id="City" placeholder="Ahmedabad" type="text" />
                </LabelInputContainer>

              </div>


              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">

                <LabelInputContainer>
                  <Label htmlFor="State">State</Label>
                  <Select>
                    <SelectTrigger className=" w-flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent 
          file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
          focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600
           disabled:cursor-not-allowed disabled:opacity-50
           dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
           group-hover/input:shadow-none transition duration-400">
                      <SelectValue placeholder="Select a state" />
                    </SelectTrigger>
                    <SelectContent className=''>
                      <SelectItem value="Andhra Pradesh">Andhra Pradesh</SelectItem>
                      <SelectItem value="Arunachal Pradesh">Arunachal Pradesh</SelectItem>
                      <SelectItem value="Assam">Assam</SelectItem>
                      <SelectItem value="Bihar">Bihar</SelectItem>
                      <SelectItem value="Chhattisgarh">Chhattisgarh</SelectItem>
                      <SelectItem value="Goa">Goa</SelectItem>
                      <SelectItem value="Gujarat">Gujarat</SelectItem>
                      <SelectItem value="Haryana">Haryana</SelectItem>
                      <SelectItem value="Himachal Pradesh">Himachal Pradesh</SelectItem>
                      <SelectItem value="Jharkhand">Jharkhand</SelectItem>
                      <SelectItem value="Karnataka">Karnataka</SelectItem>
                      <SelectItem value="Kerala">Kerala</SelectItem>
                      <SelectItem value="Madhya Pradesh">Madhya Pradesh</SelectItem>
                      <SelectItem value="Maharashtra">Maharashtra</SelectItem>
                      <SelectItem value="Manipur">Manipur</SelectItem>
                      <SelectItem value="Meghalaya">Meghalaya</SelectItem>
                      <SelectItem value="Mizoram">Mizoram</SelectItem>
                      <SelectItem value="Nagaland">Nagaland</SelectItem>
                      <SelectItem value="Odisha">Odisha</SelectItem>
                      <SelectItem value="Punjab">Punjab</SelectItem>
                      <SelectItem value="Rajasthan">Rajasthan</SelectItem>
                      <SelectItem value="Sikkim">Sikkim</SelectItem>
                      <SelectItem value="Tamil Nadu">Tamil Nadu</SelectItem>
                      <SelectItem value="Telangana">Telangana</SelectItem>
                      <SelectItem value="Tripura">Tripura</SelectItem>
                      <SelectItem value="Uttar Pradesh">Uttar Pradesh</SelectItem>
                      <SelectItem value="Uttarakhand">Uttarakhand</SelectItem>
                      <SelectItem value="West Bengal">West Bengal</SelectItem>

                    </SelectContent>
                  </Select>
                </LabelInputContainer>
                <LabelInputContainer>
                  <Label htmlFor="Pincode">Pincode</Label>
                  <Input id="Pincode" placeholder="121212" type="text" />
                </LabelInputContainer>

              </div>

              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">

                <LabelInputContainer>
                  <Label htmlFor="Address">Address</Label>
                  <Input id="Address" placeholder="Address" type="text" />
                </LabelInputContainer>
                <LabelInputContainer>
                  <Label htmlFor="Landmark">Landmark</Label>
                  <Input id="Landmark" placeholder="Landmark" type="text" />
                </LabelInputContainer>

              </div>

              <div className="w-1/2 md:space-y-0 md:space-x-2 mb-4">

                <LabelInputContainer>
                  <Label htmlFor="GST No">GST No</Label>
                  <Input id="GST No" placeholder="GST No" type="text" />
                </LabelInputContainer>

              </div>



              <div className="formHeading text-green-500 font-bold text-2xl my-3">
                Bank Details
              </div>

              <div className="w-1/2 md:space-y-0 md:space-x-2 mb-4">

                <RadioGroup defaultValue="comfortable">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Saving" id="r2" />
                    <Label htmlFor="r2">Saving</Label>

                    <RadioGroupItem value="Current" id="r1" />
                    <Label htmlFor="r1">Current</Label>

                  </div>
                </RadioGroup>

              </div>


              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">

                <LabelInputContainer>
                  <Label htmlFor="Bank A/C No">Bank A/C No</Label>
                  <Input id="Bank A/C No" placeholder="Address" type="text" />
                </LabelInputContainer>
                <LabelInputContainer>
                  <Label htmlFor="Bank Name">Bank Name</Label>
                  <Input id="Bank Name" placeholder="Bank Name" type="text" />
                </LabelInputContainer>

              </div>

              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">

                <LabelInputContainer>
                  <Label htmlFor="Bank Branch">Bank Branch</Label>
                  <Input id="Bank Branch" placeholder="Bank Branch" type="text" />
                </LabelInputContainer>
                <LabelInputContainer>
                  <Label htmlFor="Bank IFSC Code">Bank IFSC Code</Label>
                  <Input id="Bank IFSC Code" placeholder="Bank IFSC Code" type="text" />
                </LabelInputContainer>

              </div>




              <div className="formHeading text-green-500 font-bold text-2xl my-3">
                Legal Details
              </div>

              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">

                <LabelInputContainer>
                  <Label htmlFor="PAN NO">PAN NO</Label>
                  <Input id="PAN NO" placeholder="PAN NO" type="text" />
                </LabelInputContainer>
                <LabelInputContainer>
                  <Label htmlFor="Aadhaar NO">Aadhaar NO</Label>
                  <Input id="Aadhaar NO" placeholder="Aadhaar NO" type="text" />
                </LabelInputContainer>

              </div>

              {/* Cancel Cheque OR Passbok Image (Upload Image Only) */}
              {/* User Signature (Upload Image Only) */}

              <div className="formHeading text-green-500 font-bold text-2xl my-3">
                Nominee Details
              </div>

              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">

                <LabelInputContainer>
                  <Label htmlFor="Nominee Name">Nominee Name</Label>
                  <Input id="Nominee Name" placeholder="Nominee Name" type="text" />
                </LabelInputContainer>
                <LabelInputContainer>
                  <Label htmlFor="Nominee Relationship">Nominee Relationship</Label>
                  <Input id="Nominee Relationship" placeholder="Nominee Relationship" type="text" />
                </LabelInputContainer>

              </div>

              <div className="flex items-center space-x-2 my-5">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm text-black font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I accept &apos;terms and conditions&apos; and &apos;policies of HealthCare Pvt Ltd.
                </label>

              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="distTerms" />
                <label
                  htmlFor="distTerms"
                  className="text-sm text-black font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I accept &apos;the distributorship agreement&apos;
                </label>

              </div>

              <button type='submit' className="my-10 px-8 py-2 rounded-md bg-teal-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
                Submit
              </button>
            </form>

          </CardContent>
        </Card>
      </div>
      <div className="footer border-t-2 font-bold text-sm flex items-center justify-center p-1">
        Copyright © 2024 HealthHub Pvt Ltd. <span className='font-normal opacity-45'>All rights reserved.</span>
      </div>

    </div>
  )
}

export default ProfilePage