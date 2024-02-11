import { Drawer } from 'vaul';
import { LayoutGrid } from 'lucide-react';

import { MenuContent } from '@/components/side-menu-content';
import { Button } from '@/components/ui/button';

export function MobileDrawer() {
  return (
    <Drawer.Root shouldScaleBackground>
      <Button variant="outline" size="icon" title="Toggle drawer" asChild>
        <Drawer.Trigger>
          <LayoutGrid size={16} />
        </Drawer.Trigger>
      </Button>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0" />
        <Drawer.Content className="fixed bottom-0 left-0 right-0 mt-24 flex h-[80%] flex-col rounded-t-lg ">
          <div className="flex-1 overflow-y-auto rounded-t-[10px]  p-4">
            <div className="mx-auto mb-8 h-1.5 w-12 shrink-0 rounded-full" />
            <MenuContent />
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
