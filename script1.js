// Функция для определения минимального числа
function min() {
    let a = parseFloat(document.getElementById("fnum").value);
    let b = parseFloat(document.getElementById("snum").value);

    if (isNaN(a) || isNaN(b)) {
        alert('Пожалуйста, введите оба числа.');
    } else {
        let minNumber = a < b ? a : b;
        document.getElementById("result").innerText = `Минимальное число: ${minNumber}`;
    }
}


// Функция для изменения имени администратора
function admin() {
    let name = document.getElementById('name').value;
    document.getElementById("admin").innerText = `Admin: ${name}`;
}


function name_change() {
    const nameInput = document.getElementById("name_input");
    const nameError = document.getElementById("name_error");

    if (!/^[a-zA-Zа-яА-Я]+$/.test(nameInput.value)) {
        nameError.innerText = "Имя должно содержать только буквы.";
        nameError.style.display = "block";
    } else {
        nameError.style.display = "none";
        document.getElementById("name_output").innerText = nameInput.value;
    }
}

function surname_change() {
    const surnameInput = document.getElementById("surname_input");
    const surnameError = document.getElementById("surname_error");

    if (!/^[a-zA-Zа-яА-Я]+$/.test(surnameInput.value)) {
        surnameError.innerText = "Фамилия должна содержать только буквы.";
        surnameError.style.display = "block";
    } else {
        surnameError.style.display = "none";
        document.getElementById("surname_output").innerText = surnameInput.value;
    }
}

function validateAge() {
    const ageInput = document.getElementById("age");
    const ageError = document.getElementById("age_error");

    if (!/^\d+$/.test(ageInput.value) || parseInt(ageInput.value, 10) < 0) {
        ageError.innerText = "Возраст должен быть неотрицательным целым числом.";
        ageError.style.display = "block";
    } else {
        ageError.style.display = "none";
    }
}

function validateGender() {
    const genderInput = document.getElementById("gender");
    const genderError = document.getElementById("gender_error");

    if (!/^[МЖ]$/.test(genderInput.value)) {
        genderError.innerText = "Пол должен быть 'М' или 'Ж'.";
        genderError.style.display = "block";
    } else {
        genderError.style.display = "none";
    }
}


function submitForm() {
    if (document.getElementById("submition").checked) {
        alert("Форма успешно отправлена!");
    } else {
        alert("Пожалуйста, согласитесь на обработку личных данных.");
    }
}

function admin() {
    const name = document.getElementById("name").value;
    document.getElementById("admin").innerText = `Администратор: ${name}`;
}
