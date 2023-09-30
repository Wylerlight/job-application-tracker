import './Navbar.css'

export default function Navbar() {
    return (<navbar className='navbar' >
    <div className='navbar__logo'>Logo here</div>

    <div className='navbar__links-wrapper' >
        <a className='navbar__link'>Page Link</a>
        <a className='navbar__link'>Page Link</a>
        <a className='navbar__link'>Page Link</a>
        <div className='navbar__profile' ><p className='navbar__profile-picreplace'>T</p></div>
    </div>
</navbar>)
}