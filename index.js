var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
    var indexDelete = ArrayValues.indexOf(RemoveValue);
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
var Lecturer = /** @class */ (function () {
    function Lecturer(_name, _surname, _position, _company, _experience, _courses, _contact) {
        this._name = _name;
        this._surname = _surname;
        this._position = _position;
        this._company = _company;
        this._experience = _experience;
        this._courses = _courses;
        this._contact = _contact;
    }
    Object.defineProperty(Lecturer.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Lecturer.prototype, "surname", {
        get: function () {
            return this._surname;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Lecturer.prototype, "position", {
        get: function () {
            return this._position;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Lecturer.prototype, "company", {
        get: function () {
            return this._company;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Lecturer.prototype, "experience", {
        get: function () {
            return this._experience;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Lecturer.prototype, "courses", {
        get: function () {
            return this._courses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Lecturer.prototype, "contact", {
        get: function () {
            return this._contact;
        },
        enumerable: false,
        configurable: true
    });
    return Lecturer;
}());
var School = /** @class */ (function () {
    function School() {
        this._areas = [];
        this._lecturers = [];
    }
    Object.defineProperty(School.prototype, "areas", {
        get: function () {
            return this._areas;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(School.prototype, "lecturer", {
        get: function () {
            return this._lecturers;
        },
        enumerable: false,
        configurable: true
    });
    School.prototype.addArea = function (area) {
        addToArray(area, this._areas);
    };
    School.prototype.removeArea = function (area) {
        return removeInArray(area, this._areas);
    };
    School.prototype.addLecturer = function (lecturer) {
        addToArray(lecturer, this._lecturers);
    };
    School.prototype.removeLecturer = function (lecturer) {
        return removeInArray(lecturer, this._lecturers);
    };
    return School;
}());
var Area = /** @class */ (function () {
    function Area(_name) {
        this._name = _name;
        this._levels = [];
    }
    Object.defineProperty(Area.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Area.prototype, "levels", {
        get: function () {
            return this._levels;
        },
        enumerable: false,
        configurable: true
    });
    Area.prototype.addLevel = function (level) {
        addToArray(level, this._levels);
    };
    Area.prototype.removeLevel = function (level) {
        return removeInArray(level, this._levels);
    };
    return Area;
}());
var Level = /** @class */ (function () {
    function Level(_name, _description) {
        this._name = _name;
        this._description = _description;
        this._groups = [];
    }
    Object.defineProperty(Level.prototype, "groups", {
        get: function () {
            return this._groups;
        },
        enumerable: false,
        configurable: true
    });
    Level.prototype.addGroup = function (group) {
        addToArray(group, this._groups);
    };
    Level.prototype.removeGroup = function (group) {
        return removeInArray(group, this._groups);
    };
    return Level;
}());
var ArrayWithToSorted = /** @class */ (function (_super) {
    __extends(ArrayWithToSorted, _super);
    function ArrayWithToSorted(value) {
        var _this = this;
        if (value) {
            if (typeof value === 'number')
                _this = _super.call(this, value) || this;
            else
                _this = _super.apply(this, value) || this;
        }
        else {
            _this = _super.call(this) || this;
        }
        Object.defineProperty(_this, 'toSorted', {
            writable: true,
            enumerable: false
        });
        _this.toSorted = function (predicate) {
            var returnArray = new ArrayWithToSorted;
            returnArray.push.apply(returnArray, _this);
            return returnArray.sort(predicate);
        };
        return _this;
    }
    return ArrayWithToSorted;
}(Array));
var EStatus;
(function (EStatus) {
    EStatus["Pending"] = "Pending";
    EStatus["InProgress"] = "In progress";
    EStatus["Ended"] = "Ended";
})(EStatus || (EStatus = {}));
var Group = /** @class */ (function () {
    function Group(_area, _directionName, _levelName, _status) {
        if (_status === void 0) { _status = EStatus.Pending; }
        this._area = _area;
        this._directionName = _directionName;
        this._levelName = _levelName;
        this._status = _status;
        this._students = new ArrayWithToSorted;
    }
    Object.defineProperty(Group.prototype, "status", {
        get: function () {
            return this._status;
        },
        set: function (status) {
            this._status = status;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Group.prototype, "student", {
        get: function () {
            return this._students;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Group.prototype, "directionName", {
        get: function () {
            return this._directionName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Group.prototype, "area", {
        get: function () {
            return this._area;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Group.prototype, "levelName", {
        get: function () {
            return this._levelName;
        },
        enumerable: false,
        configurable: true
    });
    Group.prototype.addStudent = function (student) {
        addToArray(student, this._students);
    };
    Group.prototype.removeStudent = function (student) {
        return removeInArray(student, this._students);
    };
    Group.prototype.showPerformance = function () {
        return this._students.toSorted(function (a, b) { return b.getPerformanceRating() - a.getPerformanceRating(); });
    };
    return Group;
}());
var Student = /** @class */ (function () {
    function Student(_firstName, _lastName, _birthYear) {
        this._firstName = _firstName;
        this._lastName = _lastName;
        this._birthYear = _birthYear;
        this._grades = [];
        this._visits = [];
    }
    Object.defineProperty(Student.prototype, "age", {
        get: function () {
            return new Date(Date.now()).getFullYear() - this._birthYear.getFullYear();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "fullName", {
        get: function () {
            return "".concat(this._lastName, " ").concat(this._firstName);
        },
        set: function (fullName) {
            var _a;
            var RE = /^([a-zA-Z']+)\s{1}([a-zA-Z']+)$/i;
            if (RE.test(fullName))
                _a = fullName.split(' '), this._lastName = _a[0], this._firstName = _a[1];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "grade", {
        set: function (grade) {
            this._grades.push(grade);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "visit", {
        set: function (visit) {
            this._visits.push(visit);
        },
        enumerable: false,
        configurable: true
    });
    Student.prototype.getPerformanceRating = function () {
        var gradeValues = this._grades.flatMap(function (grade) { return Object.values(grade); });
        if (!gradeValues.length) {
            return 0;
        }
        else {
            var averageGrade = gradeValues.reduce(function (sum, grade) { return sum + grade; }, 0) / gradeValues.length;
            var attendanceValues = this._visits.flatMap(function (present) { return Object.values(present); });
            var attendancePercentage = (attendanceValues.filter(function (present) { return present; })
                .length / this._visits.length) * 100;
            return (averageGrade + attendancePercentage) / 2;
        }
    };
    return Student;
}());
