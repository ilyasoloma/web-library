import './wdyr';
import init from './init';
import { containterClassName } from './constants/defaults';

const targetDom = document.getElementById('zotero-web-library');
const menuConfigDom = document.getElementById('zotero-web-library-menu-config');
//console.log(document.cookie);
const cookieArray = document.cookie.split('; ');
const config = {};
cookieArray.forEach(cookie => {
        const [key, value] = cookie.split('=');
        config[key] = value;
    });

console.log("Config-main", config);    

config.menus = menuConfigDom ? JSON.parse(menuConfigDom.textContent) : null;

try{
	if(targetDom) {
		targetDom.classList.add(({ containterClassName, ...config }).containterClassName);
		init(targetDom, config);
	}
}
catch{ 
	window.location.href = 'http://192.168.62.111:3000';
}
