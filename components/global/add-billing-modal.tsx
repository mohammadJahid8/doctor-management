/* eslint-disable react/no-unescaped-entities */
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { CalendarIcon, Plus, Trash } from 'lucide-react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { cn } from '@/lib/utils';
import { format, parse } from 'date-fns';
import { Calendar } from '../ui/calendar';
import { useState } from 'react';
import api from '@/utils/axiosInstance';
import { useAppContext } from '@/lib/context';
import { toast } from 'sonner';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { PhoneInput } from '../ui/phone-input';

export function AddBillingModal() {
  const [inputs, setInputs] = useState<any>({
    items: [{ name: '', amount: '' }],
  });
  const [open, setOpen] = useState(false);
  const [dateOfAdmission, setDateOfAdmission] = useState<any>();
  const [dateOfDischarge, setDateOfDischarge] = useState<any>();
  const { user, billingRefetch, setBillingRefetch, appointments } =
    useAppContext();

  const appointmentsData = appointments?.filter(
    (appointment: any) => appointment?.doctor?.email === user?.email
  );

  const patientNames = appointmentsData?.map(
    (appointment: any) => appointment?.patientName
  );

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    inputs.date = format(new Date(), 'PPP');
    inputs.doctor = user?._id;
    inputs.doctorName = user?.name;
    inputs.dateOfAdmission = dateOfAdmission
      ? format(dateOfAdmission, 'PPP')
      : null;
    inputs.dateOfDischarge = dateOfDischarge
      ? format(dateOfDischarge, 'PPP')
      : null;

    try {
      const promise = await api.post(`/billing/create`, inputs);

      if (promise.status === 200) {
        setBillingRefetch(!billingRefetch);
        setInputs({ items: [{ name: '', amount: '' }] });
        setOpen(false);
        toast.success(`New billing added.`, {
          position: 'top-center',
        });
      }
    } catch (error: any) {
      console.log(error);
      setInputs({ items: [] });
      return toast.error(`Failed to add new billing!`, {
        position: 'top-center',
      });
    }
  };

  const handleAddItem = () => {
    setInputs({
      ...inputs,
      items: [...inputs.items, { name: '', amount: '' }],
    });
  };

  const handleInputChange = (index: number, field: string, value: string) => {
    const updatedItems = [...inputs.items];
    updatedItems[index][field] = value;
    setInputs({ ...inputs, items: updatedItems });
  };

  const handleDeleteItem = (index: number) => {
    const updatedItems = [...inputs.items];
    updatedItems.splice(index, 1);
    setInputs({ ...inputs, items: updatedItems });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen} modal={false}>
      <DialogTrigger asChild>
        <Button className='text-xs md:text-sm'>
          <Plus className='mr-2 h-4 w-4' /> Add New Billing
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Add new billing</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className='grid grid-cols-2 gap-4 py-4'>
          {/* <div className="flex flex-col justify-start items-start gap-2 col-span-2">
            <Label
              htmlFor="selectPatient"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Select Patient
            </Label>
            <Select
              onValueChange={(value) =>
                setInputs({ ...inputs, patientName: value })
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a patient" />
              </SelectTrigger>
              <SelectContent>
                {patientNames.map((name: string, index: number) => (
                  <SelectItem key={index} value={name}>
                    {name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div> */}

          <div className='flex flex-col justify-start items-start gap-2'>
            <Label
              htmlFor='selectPatient'
              className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
            >
              Select Patient
            </Label>
            <Select
              onValueChange={(value) =>
                setInputs({ ...inputs, patientName: value })
              }
            >
              <SelectTrigger className='w-full'>
                <SelectValue placeholder='Select a patient' />
              </SelectTrigger>
              <SelectContent>
                {patientNames.map((name: string, index: number) => (
                  <SelectItem key={index} value={name}>
                    {name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className='flex flex-col justify-start items-start gap-2'>
            <Label
              htmlFor='patientName'
              className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
            >
              Patient Name
            </Label>
            <Input
              id='patientName'
              type='text'
              className=''
              placeholder='Patient Name'
              value={inputs.patientName || ''}
              onChange={(e) =>
                setInputs({ ...inputs, patientName: e.target.value })
              }
              required
            />
          </div>
          {/* add doctor name */}
          {/* <div className="flex flex-col justify-start items-start gap-2">
            <Label
              htmlFor="doctorName"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Doctor Name
            </Label>
            <Input
              id="doctorName"
              type="text"
              className=""
              placeholder="Doctor Name"
              required //required for razorpay to send invoice to the email
              onChange={(e) =>
                setInputs({ ...inputs, doctorName: e.target.value })
              }
            />
          </div> */}
          <div className='flex flex-col justify-start items-start gap-2'>
            <Label
              htmlFor='phoneNumber'
              className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
            >
              Phone Number
            </Label>
            {/* <Input
              id="phoneNumber"
              type="number"
              className=""
              placeholder="Phone Number"
              required //phone number must be more than 8 digit
              onChange={(e) =>
                setInputs({ ...inputs, phoneNumber: e.target.value })
              }
            /> */}

            <PhoneInput
              value={inputs.phoneNumber}
              onChange={(value) => {
                setInputs({ ...inputs, phoneNumber: value });
              }}
              className='w-full'
            />
          </div>
          <div className='flex flex-col justify-start items-start gap-2'>
            <Label
              htmlFor='roomNo'
              className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
            >
              Room No
            </Label>
            <Input
              id='roomNo'
              type='text'
              className=''
              placeholder='Room No'
              onChange={(e) => setInputs({ ...inputs, roomNo: e.target.value })}
            />
          </div>
          <div className='flex flex-col justify-start items-start gap-2'>
            <Label
              htmlFor='admissionNo'
              className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
            >
              Admission No
            </Label>
            <Input
              id='admissionNo'
              type='text'
              className=''
              placeholder='Admission No'
              onChange={(e) =>
                setInputs({ ...inputs, admissionNo: e.target.value })
              }
            />
          </div>
          <div className='flex flex-col justify-start items-start gap-2'>
            <Label
              htmlFor='age'
              className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
            >
              Age
            </Label>
            <Input
              id='age'
              type='text'
              className=''
              placeholder='Age'
              onChange={(e) => setInputs({ ...inputs, age: e.target.value })}
            />
          </div>
          <div className='flex flex-col justify-start items-start gap-2'>
            <Label
              htmlFor='address'
              className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
            >
              Address
            </Label>
            <Input
              id='address'
              type='text'
              className=''
              placeholder='Address'
              onChange={(e) =>
                setInputs({ ...inputs, address: e.target.value })
              }
            />
          </div>
          <div className='flex flex-col justify-start items-start gap-2'>
            <Label
              htmlFor='dateOfAdmission'
              className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
            >
              Date Of Admission
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={'outline'}
                  className={cn(
                    'w-full justify-start text-left font-normal',
                    !dateOfAdmission && 'text-muted-foreground'
                  )}
                >
                  <CalendarIcon className='mr-2 h-4 w-4' />
                  {dateOfAdmission ? (
                    format(dateOfAdmission, 'PPP')
                  ) : (
                    <span>Pick a date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className='w-auto p-0'>
                <Calendar
                  mode='single'
                  selected={dateOfAdmission}
                  onSelect={setDateOfAdmission}
                  // initialFocus
                  required
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className='flex flex-col justify-start items-start gap-2'>
            <Label
              htmlFor='gstTax'
              className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
            >
              GST Tax
            </Label>
            <Input
              id='gstTax'
              type='number'
              className=''
              placeholder='GST Tax'
              onChange={(e) => setInputs({ ...inputs, gstTax: e.target.value })}
            />
          </div>
          <div className='flex flex-col justify-start items-start gap-2'>
            <Label
              htmlFor='dateOfDischarge'
              className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
            >
              Date Of Discharge
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={'outline'}
                  className={cn(
                    'w-full justify-start text-left font-normal',
                    !dateOfDischarge && 'text-muted-foreground'
                  )}
                >
                  <CalendarIcon className='mr-2 h-4 w-4' />
                  {dateOfDischarge ? (
                    format(dateOfDischarge, 'PPP')
                  ) : (
                    <span>Pick a date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className='w-auto p-0'>
                <Calendar
                  mode='single'
                  selected={dateOfDischarge}
                  onSelect={setDateOfDischarge}
                  // initialFocus
                  required
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className='col-span-2 gap-4 flex flex-col'>
            {inputs.items.map((item: any, index: number) => (
              <div key={index} className='flex flex-col gap-2'>
                <div className='flex gap-2'>
                  <Input
                    type='text'
                    placeholder='Item Name'
                    className='flex-1'
                    value={item.name}
                    onChange={(e) =>
                      handleInputChange(index, 'name', e.target.value)
                    }
                    required
                  />
                  <Input
                    type='number'
                    placeholder='Amount'
                    className='flex-1'
                    value={item.amount}
                    onChange={(e) =>
                      handleInputChange(index, 'amount', e.target.value)
                    }
                    required
                  />
                  <Button
                    variant='ghost'
                    onClick={() => handleDeleteItem(index)}
                  >
                    <Trash className='h-4 w-4' />
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <Button
            variant='outline'
            onClick={handleAddItem}
            className='col-span-2'
          >
            Add Item
          </Button>

          <DialogFooter className='col-span-2'>
            <Button className='w-full ' type='submit'>
              Add
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
