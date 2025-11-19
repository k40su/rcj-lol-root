const params = new URLSearchParams(window.location.search);
const id = params.get('id')?.toLowerCase();

const redirectMap = {
    'fxx09g':  'https://files.kaosu-hosting.online/f/388-ms_s4.zip',
};

const destination = redirectMap[id];

if (destination) {
    const finalUrl = new URL(destination);
    finalUrl.searchParams.set('utm_source', 'rcj.lol');
    finalUrl.searchParams.set('utm_medium', 'redirect');
    finalUrl.searchParams.set('utm_campaign', 'id-' + id);

    window.location.replace(finalUrl.toString());
} else {
    document.body.innerHTML = '<h1>Invalid or missing ID</h1>';
}