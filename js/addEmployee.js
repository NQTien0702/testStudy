const employees = [];
class Employee {
    constructor() {
        this.user = "";
        this.password = "";
        this.name = "";
        this.email = "";
        this.date = "";
        this.role = "";
        this.salary = "";
        this.timework = "";
    }

    setInfo(tknv, name, email, password, datepicker, luongCB, chucvu, giolam) {
        this.user = tknv;
        this.password = password;
        this.name = name;
        this.email = email;
        this.timework = datepicker;
        this.salary = luongCB;
        this.role = chucvu;
        this.date = giolam;
    }

    createDeleteButton() {
        const button = document.createElement('button');
        button.textContent = 'Delete';
        button.addEventListener('click', () => {
            // Xử lý sự kiện xóa ở đây (ví dụ: xóa nhân viên khỏi mảng và cập nhật bảng)
            employees.forEach((employee, index) => {
                if (employee === this) {
                    button.addEventListener('click', () => {
                        // Xóa nhân viên khỏi mảng và cập nhật bảng
                        deleteEmployee(index);
                    });
                }
            });
              
          
           
            console.log('Delete button clicked');
        });
        return button;
    }

    displayInfor() {
        console.log(`User: ${this.user}, Password: ${this.password}, Name: ${this.name}, Email: ${this.email}, Date: ${this.date}, Role: ${this.role}, Salary: ${this.salary}, Time Work: ${this.timework}`);
    }
}
function deleteEmployee(index) {
    // Xóa nhân viên khỏi mảng employees
    employees.splice(index, 1);
}

function getdataForm() {
    const form = document.getElementById('myForm');
    const { value: tknv } = form.querySelector('#tknv');
    const { value: name } = form.querySelector('#name');
    const { value: email } = form.querySelector('#email'); // Sửa lỗi ở đây
    const { value: password } = form.querySelector('#password');
    const { value: datepicker } = form.querySelector('#datepicker');
    const { value: luongCB } = form.querySelector('#luongCB');
    const { value: chucvu } = form.querySelector('#chucvu');
    const { value: giolam } = form.querySelector('#gioLam');
    return { tknv, name, email, password, datepicker, luongCB, chucvu, giolam };
}

function loadEmployeeDataToTable(employee) {
    const tableBody = document.querySelector('#employeeTable tbody');
    // Tạo một hàng mới trong bảng
    const newRow = tableBody.insertRow();
    // Thêm các ô dữ liệu vào hàng mới
    newRow.insertCell().textContent = employee.user;
    newRow.insertCell().textContent = employee.name;
    newRow.insertCell().textContent = employee.email;
    newRow.insertCell().textContent = employee.timework;
    newRow.insertCell().textContent = employee.salary;
    newRow.insertCell().textContent = employee.role;
    const deleteButtonCell = newRow.insertCell();
    deleteButtonCell.appendChild(employee.createDeleteButton()); // Thêm nút xóa vào ô cuối cùng
}

// Tạo một đối tượng Employee
function createEmployee() {
    // Lấy giá trị từ các phần tử trong biểu mẫu (nếu có)
    const formData = getdataForm();
    const emp1 = new Employee();
    emp1.setInfo(...Object.values(formData));
    emp1.displayInfor();

    employees.push(emp1);
    employees.forEach(employee => {
        loadEmployeeDataToTable(employee);
    });
}
