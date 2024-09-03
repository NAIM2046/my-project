
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
const LineChat = () => {
    const studentsMarks = [
        { studentId: 1, name: "Alice", marks: 85 },
        { studentId: 2, name: "Bob", marks: 78 },
        { studentId: 3, name: "Charlie", marks: 92 },
        { studentId: 4, name: "David", marks: 74 },
        { studentId: 5, name: "Eve", marks: 88 },
        { studentId: 6, name: "Frank", marks: 95 },
        { studentId: 7, name: "Grace", marks: 81 },
        { studentId: 8, name: "Hannah", marks: 77 },
        { studentId: 9, name: "Ivy", marks: 84 },
        { studentId: 10, name: "Jack", marks: 90 }
      ];
      
    return (
        <div>
            <LineChart width={700} height={400} data={studentsMarks} >
            <Line type="monotone" dataKey= "marks" stroke="red" ></Line>
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey="name" />
    <YAxis />
            </LineChart>
            
        </div>
    );
};

export default LineChat;