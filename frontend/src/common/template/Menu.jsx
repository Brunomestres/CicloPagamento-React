import React  from 'react';
import MenuItem from './MenuItem';
import MenuTree from './MenuTree';
export default props => (
    
    <ul className='sidebar-menu'>
        <MenuItem path='#' label='Dashboard' icon='dashboard' />
        <MenuTree label="Cadastro" icon="edit">
            <MenuItem path="#billingcycle" label="Cilcos de Pagamentos" icon="usd" />
        </MenuTree>
    </ul>
)