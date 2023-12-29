import React, { FC, forwardRef, Ref, useEffect } from 'react';
import * as Select from '@radix-ui/react-select';
import classnames from 'classnames';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import styles from './select.module.scss';

type SelectItemProps = {
  value: string;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}
  
const SelectItem: FC<SelectItemProps> = forwardRef((props, forwardedRef: Ref<HTMLDivElement>) => {
    return (
      <Select.Item className={classnames(styles.SelectItem, props.className)} {...props} ref={forwardedRef}>
        <Select.ItemText>{props.children}</Select.ItemText>
        <Select.ItemIndicator className={styles.SelectItemIndicator}>
          <CheckIcon />
        </Select.ItemIndicator>
      </Select.Item>
    );
  });
  
  type Data = {
    id: number,
    name: string
  }

  type SelectProps = {
  value: string;
  onValueChange: (value: string) => void;
  disabled: string ;
  data: Data[]
  required?: boolean;
  size?: "small" | "medium" | "large"
}

export const SelectDemo: FC<SelectProps> = ({ value, disabled, onValueChange, data, required=false, size="medium" }) => {

    useEffect(() => {
        console.log(value)
    }, [value])

    return (  
    <Select.Root value={value} onValueChange={onValueChange} required={required}>  {/*setValue - функция, которая вызывается при изменении значения*/}
        <Select.Trigger className={classnames(styles.SelectTrigger, styles[size])} aria-label="Food">
        <Select.Value placeholder="Select a fruit…" />
        <Select.Icon className={styles.SelectIcon}>
            <ChevronDownIcon />
        </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
        <Select.Content className={styles.SelectContent} position="popper"> {/* position="popper"  - выпадающий список снизу*/}
            <Select.ScrollUpButton className={styles.SelectScrollButton}>
            <ChevronUpIcon />
            </Select.ScrollUpButton>
            <Select.Viewport className={styles.SelectViewport} >
              {data.map((item)=>{
                return (
                    <SelectItem key={item.id} value={item.name} disabled={item.name === disabled}>{item.name}</SelectItem>
                )
              })}
            </Select.Viewport>
            <Select.ScrollDownButton className={styles.SelectScrollButton}>
            <ChevronDownIcon />
            </Select.ScrollDownButton>
        </Select.Content>
        </Select.Portal>
  </Select.Root>
)}

