const form = document.getElementById('output').addEventListener('submit', (e) => {
    e.preventDefault();
    const ten = document.getElementById('nhapten').value;
    document.querySelector('.output-ten').textContent = `Tên: ${ten}`;

    const email = document.getElementById('nhapemail').value;
    document.querySelector('.output-email').textContent = `Email: ${email}`;

    const genders = document.getElementsByName('gioitinh');
    genders.forEach(gioitinh => {
        if (gioitinh.checked == true) {
            document.querySelector('.output-gioitinh').textContent = `Giới Tính: ${gioitinh.value}`;
        };
    });

    const quoctich = document.getElementById('chonquoctich').value;
    document.querySelector('.output-quoctich').textContent = `Quốc Tịch: ${quoctich}`;

    const hobbies = document.getElementsByName('sothich');
    sothichArray = [];
    hobbies.forEach(sothich => {
        if (sothich.checked == true) {
            sothichArray.push(sothich.value);
        };
    });
    document.querySelector('.output-sothich').textContent = `Sở Thích: ${sothichArray.join(', ')}`;
});