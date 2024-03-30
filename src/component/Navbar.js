import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ authenticate, setAuthenticate }) => {
    const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M Home', 'Sale', '지속가능성']

    const navigate = useNavigate();

    const goToLogin = () => {
        navigate("/login");
    }

    const logout = () => {
        setAuthenticate(false);
    };

    const search = (event) => {
        if(event.key === "Enter") {
            let keyword = event.target.value;
            navigate(`/?q=${keyword}`);
        }
    }

    const goToMain = () => {
        navigate('/');
    }

    return (
        <div>
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
            <div className='menu-area'>
                <ul className='menu-list'>
                    {menuList.map((menu) => (
                        <li>{menu}</li>
                    ))}
                </ul>

                <div className='input-area'>
                    <FontAwesomeIcon icon={ faSearch } />
                    <input type="text" onKeyPress={(event)=>search(event)}/>
                </div>

            </div>
        </div>
    )
}

export default Navbar