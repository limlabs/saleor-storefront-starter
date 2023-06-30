"use client";

import { useDrawer } from ".";

export const DrawerToggle = () => {
  const { setSidebarOpen, sidebarOpen } = useDrawer();
  return (
    <input
      id="drawerToggle"
      type="checkbox"
      className="drawer-toggle "
      onChange={() => setSidebarOpen(!sidebarOpen)}
      checked={sidebarOpen}
    />
  );
};
