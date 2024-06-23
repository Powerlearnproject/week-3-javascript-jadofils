
        // Function Operations
        document.getElementById('addBtn').addEventListener('click', () => calculate('add'));
        document.getElementById('subtractBtn').addEventListener('click', () => calculate('subtract'));
        document.getElementById('divideBtn').addEventListener('click', () => calculate('divide'));
        document.getElementById('multiplyBtn').addEventListener('click', () => calculate('multiply'));
        document.getElementById('clearBtn').addEventListener('click', clearResult);

        function calculate(operation) {
            const num1 = parseFloat(document.getElementById('num1').value);
            const num2 = parseFloat(document.getElementById('num2').value);
            let result;
            switch (operation) {
                case 'add':
                    result = num1 + num2;
                    break;
                case 'subtract':
                    result = num1 - num2;
                    break;
                case 'divide':
                    result = num1 / num2;
                    break;
                case 'multiply':
                    result = num1 * num2;
                    break;
                default:
                    result = 'Invalid Operation';
            }
            document.getElementById('result').innerText = `Result: ${result}`;
            document.getElementById('result').classList.remove('hidden');
        }

        function clearResult() {
            document.getElementById('num1').value = '';
            document.getElementById('num2').value = '';
            document.getElementById('result').innerText = '';
            document.getElementById('result').classList.add('hidden');
        }

        // Form Validation and Events
        document.getElementById('form').addEventListener('submit', (e) => e.preventDefault());
        document.getElementById('submitBtn').addEventListener('click', validateForm);
        document.getElementById('clearFormBtn').addEventListener('click', clearForm);
        document.getElementById('checkbox').addEventListener('change', togglePasswordVisibility);

        function validateForm() {
            const gender = document.querySelector('input[name="gender"]:checked');
            const names = document.getElementById('names').value.trim();
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value.trim();

            let isValid = true;

            if (!gender) {
                document.getElementById('gender_error').style.color = 'red';
                document.getElementById('gender_error').classList.remove('hidden');
                isValid = false;
            } else {
                document.getElementById('gender_error').classList.add('hidden');
            }

            if (names === '') {
                document.getElementById('name_error').style.color = 'red';
                document.getElementById('name_error').classList.remove('hidden');
                isValid = false;
            } else {
                document.getElementById('name_error').classList.add('hidden');
            }

            if (email === '') {
                document.getElementById('email_error').style.color = 'red';
                document.getElementById('email_error').classList.remove('hidden');
                isValid = false;
            } else {
                document.getElementById('email_error').classList.add('hidden');
            }

            if (password === '') {
                document.getElementById('pass_error').style.color = 'red';
                document.getElementById('pass_error').classList.remove('hidden');
                isValid = false;
            } else {
                document.getElementById('pass_error').classList.add('hidden');
            }

            if (isValid) {
                document.getElementById('formResult').innerText = 'Form submitted successfully!';
                document.getElementById('formResult').classList.remove('hidden');
            } else {
                document.getElementById('formResult').classList.add('hidden');
            }
        }

        function clearForm() {
            document.getElementById('form').reset();
            document.getElementById('formResult').innerText = '';
            document.getElementById('formResult').classList.add('hidden');
            document.getElementById('gender_error').classList.add('hidden');
            document.getElementById('name_error').classList.add('hidden');
            document.getElementById('email_error').classList.add('hidden');
            document.getElementById('pass_error').classList.add('hidden');
        }

        function togglePasswordVisibility() {
            const passwordInput = document.getElementById('password');
            if (document.getElementById('checkbox').checked) {
                passwordInput.type = 'text';
            } else {
                passwordInput.type = 'password';
            }
        }

        // Additional Event Listeners
        document.getElementById('events').addEventListener('mouseover', () => console.log('Mouse over the link'));
        document.getElementById('events').addEventListener('click', (e) => {
           // e.preventDefault();
            alert('Link Clicked To view The events handler in javaScript!!!!!!');
        });
        window.addEventListener('load', () => console.log('Page loaded'));
        window.addEventListener('resize', () => console.log('Window resized'));
        window.addEventListener('scroll', () => console.log('Page scrolled'));
 