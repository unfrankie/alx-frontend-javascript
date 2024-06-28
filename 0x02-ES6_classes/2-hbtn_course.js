class HolbertonCourse {
    constructor(name, length, students) {
        this.name = name;
        this.length = length;
        this._students = students || [];
    }

    set name(name) {
        if (typeof name === 'string') {
            this._name = name;
        } else {
            throw new TypeError('Name must be a string');
        }
    }

    get name() {
        return this._name;
    }

    set length(length) {
        if (typeof length === 'number') {
            this._length = length;
        } else {
            throw new TypeError('Length must be a number');
        }
    }

    get length() {
        return this._length;
    }

    get students() {
        return this._students;
    }

    set students(students) {
        this._students = students;
    }
}

export default HolbertonCourse;
