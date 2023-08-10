const head = document.head || document.getElementsByTagName('head')[0];

const appleTouchIcon = document.createElement('link');
appleTouchIcon.rel = 'apple-touch-icon';
appleTouchIcon.sizes = '180x180';
appleTouchIcon.href = './favicon/apple-touch-icon.png';

const favicon32 = document.createElement('link');
favicon32.rel = 'icon';
favicon32.type = 'image/png';
favicon32.sizes = '32x32';
favicon32.href = './favicon/favicon-32x32.png';

const favicon16 = document.createElement('link');
favicon16.rel = 'icon';
favicon16.type = 'image/png';
favicon16.sizes = '16x16';
favicon16.href = './favicon/favicon-16x16.png';

const manifest = document.createElement('link');
manifest.rel = 'manifest';
manifest.href = './favicon/site.webmanifest';

head.appendChild(appleTouchIcon);
head.appendChild(favicon32);
head.appendChild(favicon16);
head.appendChild(manifest);
