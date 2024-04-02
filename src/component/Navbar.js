import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch, faSignOutAlt, faBars } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import { authenticateAction } from '../redux/actions/authenticateAction';


const Navbar = () => {
    const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M Home', 'Sale', '지속가능성']
    const [mobileMenu, setMobileMenu] = useState(false);
    const id = useSelector((state) => state.auth.id);
    const authenticate = useSelector((state) => state.auth.authenticate);

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const goToLogin = () => {
        navigate("/login");
    }

    const logout = () => {
        // setAuthenticate(false);
        dispatch(authenticateAction.logout());
    };

    useEffect(() => {}, [id]);


    const search = (event) => {
        if (event.key === "Enter") {
            let keyword = event.target.value;
            navigate(`/?q=${keyword}`);
            setMobileMenu(false);
        }
    }

    const goToMain = () => {
        navigate('/');
    }

    const handleClose = () => setMobileMenu(false);
    const handleShow = () => setMobileMenu(true);

    const menuContent = (
        <div className='menu-area'>
            <ul className='menu-list'>
                {menuList.map((menu, index) => (
                    <li key={index}>{menu}</li>
                ))}
            </ul>
        </div>
    );

    return (
        <div>
            <div className='mobile-menu-icon' onClick={handleShow}>
                <FontAwesomeIcon icon={faBars} />
            </div>
            <Modal show={mobileMenu} onHide={handleClose} animation={true} dialogClassName="modal-90w" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Body>
                    {menuContent}
                </Modal.Body>
            </Modal>
            <div>
                {authenticate ? (
                    <div className='login-button' onClick={logout}>
                        <FontAwesomeIcon icon={faSignOutAlt} />
                        <div>로그아웃</div>
                    </div>
                ) : (
                    <div className='login-button' onClick={goToLogin}>
                        <FontAwesomeIcon icon={faUser} />
                        <div>로그인</div>
                    </div>
                )}
            </div>
            <div className='nav-section'>
                <img
                    width={100}
                    src='https://blog.kakaocdn.net/dn/Yt80C/btqDeJAYUBo/JQbTuukRladq2AUOeqgiEK/img.jpg' alt=''
                    onClick={goToMain}
                />
            </div>
            {!mobileMenu && menuContent}
            <div className='input-area'>
                <FontAwesomeIcon icon={faSearch} />
                <input type="text" onKeyPress={(event) => search(event)} />
            </div>
        </div>
    )
}

export default Navbar