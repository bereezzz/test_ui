import * as Tooltip from '@radix-ui/react-tooltip';
import { PlusIcon } from '@radix-ui/react-icons';
import styles from './tooltip.module.scss';

 export const TooltipDemo = () => {
  return (
    <Tooltip.Provider  delayDuration={800} skipDelayDuration={500}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <button className={styles.IconButton}>
            <PlusIcon />
          </button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content className={styles.TooltipContent} side='top' sideOffset={5}>
            Add to library
            <Tooltip.Arrow className={styles.TooltipArrow} />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};
