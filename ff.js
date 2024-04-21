mport http from "k6/http";

export let options = {
    stages: [
        { duration: "2m", target: 2000 }, // Contoh stage, sesuaikan dengan keb>
        { duration: '1m', target: 0 }, // quick ramp-down to 0 users
    ]
};

export default function () {
    const host = __ENV.HOST || "https://test.k6.io"; // Gunakan host default ji>
    const response = http.get(host);
    console.log(`Response status code: ${response.status}`);
}


