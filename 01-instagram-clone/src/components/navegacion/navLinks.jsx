import { NavLink as NL } from 'react-router-dom'
export const NavLinks = ({to, children,ref, ...props}) => {
    return(
        <NL
          {...props}
          className={({isActive}) => isActive ? 'isActive' : undefined}
          to={to}
          ref={ref}

        >
          {children}
        </NL>
    )
}