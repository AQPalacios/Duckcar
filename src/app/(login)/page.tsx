import { Login } from "@/ui/components/login/Login";

const getAutoescuelas = async () => {
    const fetchData = await fetch("http://localhost:3000/api/login", {
        method: 'GET',
        headers: {
            "Content-type": "application/json"
        }
    });
    const res = await fetchData.json();
    console.log(res);
    // return res;
}

export default async function LoginPage() {
    getAutoescuelas();
    return (
        <div className="flex justify-center mt-52">
            <Login />
        </div>
    );
}
