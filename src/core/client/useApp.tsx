'use client';

import { createContext, useContext } from 'react';
import type { FC, PropsWithChildren } from 'react';

interface AppProviderStore {
    params:{
        locale?: string;    
    }
}

interface AppProvider {
    value: AppProviderStore;
}

const AppContext = createContext<AppProviderStore>({
    params:{}
});

export const AppProvider: FC<PropsWithChildren<AppProvider>> = ({ children, value}) => {
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
};

export const useApp = ()=> useContext(AppContext);