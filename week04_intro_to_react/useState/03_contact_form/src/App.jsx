import { useState } from 'react';

const App = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        tel: '',
        message: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.tel || !form.message) {
            alert('Please fill out all fields!');
            return;
        }
        console.log(form);
        setForm({
            name: '',
            email: '',
            tel: '',
            message: '',
        });
    };
    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    return (
        <div>
            <form
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    width: '25%',
                }}
                onSubmit={handleSubmit}
            >
                <label>
                    Name:
                    <input
                        value={form.name}
                        onChange={handleChange}
                        type='text'
                        name='name'
                    />
                </label>
                <label>
                    Email:
                    <input
                        value={form.email}
                        onChange={handleChange}
                        type='email'
                        name='email'
                    />
                </label>
                <label>
                    Telephone:
                    <input
                        value={form.tel}
                        onChange={handleChange}
                        type='tel'
                        name='tel'
                    />
                </label>
                <label>
                    Message:
                    <textarea
                        value={form.message}
                        onChange={handleChange}
                        name='message'
                    ></textarea>
                </label>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default App;
