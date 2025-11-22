"use client";

import { PropsWithChildren, useState} from "react";
import { Check } from "lucide-react"
import { Field } from "@/components/shadcn/ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/shadcn/ui/select";
import { InputProps, SelectorProps } from "@/types/common.type";
import { cn } from "@/components/shadcn/utils"
import { Button } from "@/components/shadcn/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/shadcn/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/shadcn/ui/popover"
//
import { InputLabel } from "./input-label";

interface Props extends PropsWithChildren, InputProps, SelectorProps {}

export const SelectMultipleInput: React.FC<Props> = ({
  name,
  label,
  placeholder,
  defaultValue,
  data = [],
  required,
}) => {
 const [open, setOpen] = useState(false)
  const [values, setValues] = useState<string[]>([])

  const handleSelect = (currentValue: string) => {
    setValues(prev =>
      prev.includes(currentValue)
        ? prev.filter(v => v !== currentValue)
        : [...prev, currentValue]
    )
  }
  // 
  return (
    <Field>
      {label ? (
        <InputLabel name={name} required={required}>
          {label}
        </InputLabel>
      ) : null}

      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-[200px] justify-between">
            {values.length > 0 ? `${values.length} selected` : "Select options"}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup>
                {data.map((item) => (
                  <CommandItem
                    key={item.value}
                    value={item.value}
                    onSelect={() => handleSelect(item.value)}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        values.includes(item.value)
                          ? "opacity-100"
                          : "opacity-0",
                      )}
                    />
                    {item.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </Field>
  );
};
