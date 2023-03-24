import React, { createContext, useContext, useState } from 'react'

const SideMenuContext = createContext(false)

function SideMenuProvider({ children, ...props }) {
	const value = useState(false)

	return <SideMenuContext.Provider value={value}>{children}</SideMenuContext.Provider>
}

function useSideMenuContext() {
	const context = useContext(SideMenuContext)
	if (!context) throw new Error('must be used within <SideMenuProvider/>')
	return context
}

export { SideMenuContext, SideMenuProvider, useSideMenuContext }
