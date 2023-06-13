let isAuth = false;

const userButton = document.querySelector('.btn-user');

userButton.addEventListener('click', () => {
    isAuth = !isAuth;
    const userLetter = document.querySelector('.btn-user__letter');
    const userIcon = document.querySelector('.btn-user__icon');
    const notificationBtn = document.querySelector('.btn-notification');
    const menuBtn = document.querySelector('.btn-menu');
    const golfBtn = document.querySelector('.btn-golf');
    const headerLogo = document.querySelector('.header__logo');
    userLetter.style.display = isAuth ? 'none' : 'block';
    userIcon.style.display = isAuth ? 'block' : 'none';
    notificationBtn.style.display = isAuth ? 'block' : 'none';
    menuBtn.style.display = isAuth ? 'block' : 'none';
    golfBtn.style.display = isAuth ? 'block' : 'none';
    headerLogo.style.display = isAuth ? 'none' : 'block';
})