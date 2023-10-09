"use strict";
var EAreas;
(function (EAreas) {
    EAreas["Programming"] = "Programming";
    EAreas["Testing"] = "Testing";
    EAreas["Management"] = "Management";
    EAreas["Marketing"] = "Marketing";
    EAreas["Design"] = "Design";
    EAreas["Childrens"] = "\u0421hildren's courses";
})(EAreas || (EAreas = {}));
var ECoursesProgramming;
(function (ECoursesProgramming) {
    ECoursesProgramming["Frontend"] = "Front-end";
    ECoursesProgramming["Java"] = "Java";
    ECoursesProgramming["PHP"] = "PHP";
    ECoursesProgramming["Python"] = "Python";
    ECoursesProgramming["DevOps"] = "DevOps";
    ECoursesProgramming["DataScience"] = "Data Science";
    ECoursesProgramming["CSharp"] = "C#";
    ECoursesProgramming["JavaScriptTypeScript"] = "JavaScript and TypeScript";
    ECoursesProgramming["FullStack"] = "Full-Stack";
})(ECoursesProgramming || (ECoursesProgramming = {}));
var ECoursesTesting;
(function (ECoursesTesting) {
    ECoursesTesting["QAManual"] = "QA Manual";
    ECoursesTesting["QATechnicalPro"] = "QA Technical Pro";
    ECoursesTesting["QAAutomationJava"] = "QA Automation - Java";
    ECoursesTesting["QAAutomationPython"] = "QA Automation - Python";
    ECoursesTesting["QAAutomationJavaScript"] = "QA Automation - JavaScript";
    ECoursesTesting["ISTQBCertificationForTesters"] = "ISTQB Certification for Testers";
})(ECoursesTesting || (ECoursesTesting = {}));
var ECoursesManagement;
(function (ECoursesManagement) {
    ECoursesManagement["ProjectManagement"] = "Project Management";
    ECoursesManagement["ProductManagement"] = "Product Management";
    ECoursesManagement["BusinessAnalysis"] = "Business analysis";
    ECoursesManagement["GameDesign"] = "Game Design";
    ECoursesManagement["RecruitmentHR"] = "Recruitment & HR";
})(ECoursesManagement || (ECoursesManagement = {}));
var ECoursesMarketing;
(function (ECoursesMarketing) {
    ECoursesMarketing["InternetMarketing"] = "Internet Marketing";
    ECoursesMarketing["SocialMediaMarketing"] = "Social Media Marketing";
    ECoursesMarketing["SMMPro"] = "SMM Pro";
})(ECoursesMarketing || (ECoursesMarketing = {}));
var ECoursesDesign;
(function (ECoursesDesign) {
    ECoursesDesign["WebDesignBasics"] = "Web Design Basics";
    ECoursesDesign["UIUXDesignPro"] = "UI/UX Design Pro";
})(ECoursesDesign || (ECoursesDesign = {}));
var ECoursesChildrens;
(function (ECoursesChildrens) {
    ECoursesChildrens["FrontEnd"] = "Front-end";
    ECoursesChildrens["Python"] = "Python";
    ECoursesChildrens["Java"] = "Java";
    ECoursesChildrens["Design"] = "Design";
    ECoursesChildrens["Marketing"] = "Marketing";
})(ECoursesChildrens || (ECoursesChildrens = {}));
var ECoursesLevel;
(function (ECoursesLevel) {
    ECoursesLevel["BASIC"] = "BASIC";
    ECoursesLevel["ADVANCED"] = "ADVANCED";
})(ECoursesLevel || (ECoursesLevel = {}));
function addToArray(AddValue, ArrayValues) {
    ArrayValues.push(AddValue);
}
function removeInArray(RemoveValue, ArrayValues) {
    const indexDelete = ArrayValues.indexOf(RemoveValue);
    if (indexDelete >= 0) {
        ArrayValues.splice(indexDelete, 1);
        return true;
    }
    else {
        return false;
    }
}
var PositionLecturerEnum;
(function (PositionLecturerEnum) {
    PositionLecturerEnum["Middle"] = "Middle";
    PositionLecturerEnum["Senior"] = "Senior";
    PositionLecturerEnum["Lead"] = "Lead";
})(PositionLecturerEnum || (PositionLecturerEnum = {}));
class Lecturer {
    _name;
    _surname;
    _position;
    _company;
    _experience;
    _courses;
    _contact;
    get name() {
        return this._name;
    }
    get surname() {
        return this._surname;
    }
    get position() {
        return this._position;
    }
    get company() {
        return this._company;
    }
    get experience() {
        return this._experience;
    }
    get courses() {
        return this._courses;
    }
    get contact() {
        return this._contact;
    }
    constructor(_name, _surname, _position, _company, _experience, _courses, _contact) {
        this._name = _name;
        this._surname = _surname;
        this._position = _position;
        this._company = _company;
        this._experience = _experience;
        this._courses = _courses;
        this._contact = _contact;
    }
}
class School {
    _areas = [];
    _lecturers = [];
    get areas() {
        return this._areas;
    }
    get lecturer() {
        return this._lecturers;
    }
    addArea(area) {
        addToArray(area, this._areas);
    }
    removeArea(area) {
        return removeInArray(area, this._areas);
    }
    addLecturer(lecturer) {
        addToArray(lecturer, this._lecturers);
    }
    removeLecturer(lecturer) {
        return removeInArray(lecturer, this._lecturers);
    }
}
class Area {
    _name;
    _levels = [];
    get name() {
        return this._name;
    }
    get levels() {
        return this._levels;
    }
    constructor(_name) {
        this._name = _name;
    }
    addLevel(level) {
        addToArray(level, this._levels);
    }
    removeLevel(level) {
        return removeInArray(level, this._levels);
    }
}
class Level {
    _name;
    _description;
    _groups = [];
    get groups() {
        return this._groups;
    }
    constructor(_name, _description) {
        this._name = _name;
        this._description = _description;
    }
    addGroup(group) {
        addToArray(group, this._groups);
    }
    removeGroup(group) {
        return removeInArray(group, this._groups);
    }
}
class ArrayWithToSorted extends Array {
    toSorted;
    constructor(value) {
        if (value) {
            if (typeof value === 'number')
                super(value);
            else
                super(...value);
        }
        else {
            super();
        }
        Object.defineProperty(this, 'toSorted', {
            writable: true,
            enumerable: false
        });
        this.toSorted = (predicate) => {
            const returnArray = new ArrayWithToSorted;
            returnArray.push(...this);
            return returnArray.sort(predicate);
        };
    }
}
var EStatus;
(function (EStatus) {
    EStatus["Pending"] = "Pending";
    EStatus["InProgress"] = "In progress";
    EStatus["Ended"] = "Ended";
})(EStatus || (EStatus = {}));
class Group {
    _area;
    _directionName;
    _levelName;
    _status;
    _students = new ArrayWithToSorted;
    get status() {
        return this._status;
    }
    set status(status) {
        this._status = status;
    }
    get student() {
        return this._students;
    }
    get directionName() {
        return this._directionName;
    }
    get area() {
        return this._area;
    }
    get levelName() {
        return this._levelName;
    }
    constructor(_area, _directionName, _levelName, _status = EStatus.Pending) {
        this._area = _area;
        this._directionName = _directionName;
        this._levelName = _levelName;
        this._status = _status;
    }
    addStudent(student) {
        addToArray(student, this._students);
    }
    removeStudent(student) {
        return removeInArray(student, this._students);
    }
    showPerformance() {
        return this._students.toSorted((a, b) => b.getPerformanceRating() - a.getPerformanceRating());
    }
}
class Student {
    _firstName;
    _lastName;
    _birthYear;
    _grades = [];
    _visits = [];
    get age() {
        return new Date(Date.now()).getFullYear() - this._birthYear.getFullYear();
    }
    get fullName() {
        return `${this._lastName} ${this._firstName}`;
    }
    set fullName(fullName) {
        const RE = /^([a-zA-Z']+)\s{1}([a-zA-Z']+)$/i;
        if (RE.test(fullName))
            [this._lastName, this._firstName] = fullName.split(' ');
    }
    set grade(grade) {
        this._grades.push(grade);
    }
    set visit(visit) {
        this._visits.push(visit);
    }
    constructor(_firstName, _lastName, _birthYear) {
        this._firstName = _firstName;
        this._lastName = _lastName;
        this._birthYear = _birthYear;
    }
    getPerformanceRating() {
        const gradeValues = this._grades.flatMap(grade => Object.values(grade));
        if (!gradeValues.length) {
            return 0;
        }
        else {
            const averageGrade = gradeValues.reduce((sum, grade) => sum + grade, 0) / gradeValues.length;
            const attendanceValues = this._visits.flatMap(present => Object.values(present));
            const attendancePercentage = (attendanceValues.filter(present => present)
                .length / this._visits.length) * 100;
            return (averageGrade + attendancePercentage) / 2;
        }
    }
}
