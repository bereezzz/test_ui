import * as Tooltip from '@radix-ui/react-tooltip';
import { PlusIcon } from '@radix-ui/react-icons';
import styles from './tooltip.module.scss';
import { FC } from 'react';

type TooltipProps = {
  side?: 'bottom' | 'top' | 'left' | 'right';
  delayDuration?: number;
  skipDelayDuration?: number;
}

export const TooltipDemo: FC<TooltipProps> = ({ side='top',skipDelayDuration=300, delayDuration=300}) => {
  return (
    <Tooltip.Provider  delayDuration={delayDuration} skipDelayDuration={skipDelayDuration}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <button className={styles.IconButton}>
            <PlusIcon />
          </button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content className={styles.TooltipContent} side={side} sideOffset={5}>
            Add to library
            <Tooltip.Arrow className={styles.TooltipArrow} />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};
