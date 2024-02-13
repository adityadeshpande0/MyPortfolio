import React from 'react'
import '..//Footer/footerStyles.css'
import branchIcon from '..//..//Assets/Images/branch_icon_footer.svg'
function Footer() {
  return (
    <div className='main-block-footer' >
      <div className='first-block-footer' >
        <img src={branchIcon} />
        <p>main</p>
      </div>
    </div>
  )
}

export default Footer
