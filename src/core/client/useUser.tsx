import React, {
  createContext,
  useState,
  useContext,
  PropsWithChildren,
} from "react";

// Define the user context
export interface User {
  id: string;
  email: string;
  // Add other user properties as needed
}

interface UserContextValue {
  user: User | null;
  setUser: (user: User | null) => void;
}

const UserContext = createContext<UserContextValue | null>(null);

// Create a UserProvider component to wrap around the application
export const UserProvider: React.FC = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
