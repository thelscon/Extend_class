enum EAreas {
    Programming = 'Programming',
    Testing = 'Testing',
    Management = 'Management' ,
    Marketing  = 'Marketing',
    Design = 'Design' ,
    Childrens = 'Сhildren\'s courses'
}
enum ECoursesProgramming {
    Frontend = 'Front-end' ,
    Java  = 'Java' ,
    PHP = 'PHP' ,
    Python = 'Python' ,
    DevOps = 'DevOps' ,
    DataScience = 'Data Science' ,
    CSharp = 'C#' ,
    JavaScriptTypeScript = 'JavaScript and TypeScript' ,
    FullStack = 'Full-Stack'
}
enum ECoursesTesting {
    QAManual = 'QA Manual' ,
    QATechnicalPro = 'QA Technical Pro' ,
    QAAutomationJava = 'QA Automation - Java' ,
    QAAutomationPython = 'QA Automation - Python' ,
    QAAutomationJavaScript = 'QA Automation - JavaScript' ,
    ISTQBCertificationForTesters = 'ISTQB Certification for Testers'
}
enum ECoursesManagement {
    ProjectManagement = 'Project Management' ,
    ProductManagement = 'Product Management' ,
    BusinessAnalysis = 'Business analysis' ,
    GameDesign = 'Game Design' ,
    RecruitmentHR = 'Recruitment & HR'
}
enum ECoursesMarketing {
    InternetMarketing = 'Internet Marketing' ,
    SocialMediaMarketing = 'Social Media Marketing' ,
    SMMPro = 'SMM Pro'
}
enum ECoursesDesign {
    WebDesignBasics = 'Web Design Basics' ,
    UIUXDesignPro = 'UI/UX Design Pro'
}
enum ECoursesChildrens {
    FrontEnd = 'Front-end' ,
    Python = 'Python' ,
    Java = 'Java' ,
    Design = 'Design' ,
    Marketing = 'Marketing'
}
type ECourses = ECoursesProgramming
                | ECoursesTesting
                | ECoursesManagement
                | ECoursesMarketing
                | ECoursesDesign
                | ECoursesChildrens
enum ECoursesLevel {
    BASIC = 'BASIC' ,
    ADVANCED = 'ADVANCED'
}

type AddRemoveValueType <Type , SubType> = Type extends Group ? Student : 
                                Type extends Level ? Group :
                                Type extends Area ? Level : 
                                Type extends School ? (SubType extends Area ? Area : Lecturer) 
                                : never 

function addToArray <Type , SubType> (AddValue : AddRemoveValueType <Type , SubType> , 
                                        ArrayValues : Array <AddRemoveValueType <Type , SubType>>) : void {
    ArrayValues.push (AddValue)
}
function removeInArray <Type , SubType> (RemoveValue : AddRemoveValueType <Type , SubType> , 
                                            ArrayValues : Array <AddRemoveValueType <Type , SubType>>) : boolean {
    const indexDelete : number = ArrayValues.indexOf (RemoveValue)
    if (indexDelete >= 0) {
        ArrayValues.splice (indexDelete , 1)
        return true
    }
    else {
        return false
    }
}

enum PositionLecturerEnum {
    Middle = 'Middle',
    Senior = 'Senior',
    Lead = 'Lead'
}
interface IContact {
    email : string ,
    phone : number
}
class Lecturer {
    get name () : string {
        return this._name
    }
    get surname () : string {
        return this._surname
    }
    get position () : PositionLecturerEnum {
        return this._position
    }
    get company () : string {
        return this._company
    }
    get experience () : number {
        return this._experience
    }
    get courses () : ECourses {
        return this._courses
    }
    get contact () : IContact {
        return this._contact
    }

    constructor (
        private _name : string ,
        private _surname : string ,
        private _position : PositionLecturerEnum ,
        private _company : string ,
        private _experience : number ,
        private _courses : ECourses ,
        private _contact : IContact
    ) {}
}

class School {
    private _areas : Array <Area> = []
    private _lecturers : Array <Lecturer> = []

    get areas () : Array <Area> {
        return this._areas
    }
    get lecturer () : Array <Lecturer> {
        return this._lecturers
    }

    addArea (area : Area) : void {
        addToArray <School , Area> (area , this._areas)
    }
    removeArea (area : Area) : boolean {
        return removeInArray <School , Area> (area , this._areas)
    }
    addLecturer (lecturer : Lecturer) : void {
        addToArray <School , Lecturer> (lecturer , this._lecturers )
    }
    removeLecturer (lecturer : Lecturer) : boolean {
        return removeInArray <School , Lecturer> (lecturer , this._lecturers )
    }
}

class Area {
    private _levels : Array <Level> = []

    get name () : EAreas {
        return this._name
    }
    get levels () : Array <Level> {
        return this._levels
    }

    constructor ( private _name : EAreas) {}

    addLevel (level : Level) : void {
        addToArray <Area , never> (level , this._levels)
    }
    removeLevel (level : Level) : boolean {
        return removeInArray <Area , never> (level , this._levels)
    }
}

class Level {
    private _groups : Array <Group> = []

    get groups () : Array <Group>  {
        return  this._groups
    }

    constructor (
        private _name : ECoursesLevel ,
        private _description : ECourses
    ) {}

    addGroup (group : Group) : void {
        addToArray <Level , never> (group , this._groups)
    }
    removeGroup (group : Group) : boolean {
        return removeInArray <Level , never> (group , this._groups)
    }
}

type predicateSortType <Type> = (a : Type , b : Type) => number
class ArrayWithToSorted <Type> extends Array <Type> {
    toSorted : (predicate ?: predicateSortType <Type>) => ArrayWithToSorted <Type>

    constructor (value ?: number | Array <Type>) {
        if (value) {
            if ( typeof value === 'number' )
                super (value) 
            else
                super (...value)
        }
        else {
            super ()
        }

        Object.defineProperty (this, 'toSorted' , {
            writable : true ,
            enumerable : false
        })
        this.toSorted = (predicate ?) => {
            const returnArray : ArrayWithToSorted <Type> = new ArrayWithToSorted
            returnArray.push ( ...this )
            return returnArray.sort (predicate)
        }
    }
}
enum EStatus {
    Pending = 'Pending' ,
    InProgress = 'In progress' ,
    Ended = 'Ended'
}
class Group {
    private _students : ArrayWithToSorted <Student> = new ArrayWithToSorted

    get status () : EStatus {
        return this._status
    }
    set status (status : EStatus) {
        this._status = status
    }
    get student () : ArrayWithToSorted <Student> {
        return this._students
    }
    get directionName () : ECourses {
        return this._directionName
    }
    get area () : EAreas {
        return this._area
    }
    get levelName () : ECoursesLevel {
        return this._levelName
    }
    constructor (
        private _area : EAreas ,
        private _directionName : ECourses ,
        private _levelName : ECoursesLevel ,
        private _status : EStatus = EStatus.Pending
    ) {

    }

    addStudent (student : Student) : void {
        addToArray <Group , never> (student , this._students)
    }
    removeStudent (student : Student) : boolean {
        return removeInArray <Group , never> (student , this._students)
    }

    showPerformance () : ArrayWithToSorted <Student> {
        return this._students.toSorted((a, b) => b.getPerformanceRating() - a.getPerformanceRating())
    }
}

type TGrade = {
    [workName : string] : number
}
type TVisit = {
    [lessonName : string] : boolean
}
class Student {
    private _grades : Array <TGrade> = []
    private _visits : Array <TVisit> = []

    get age () : number {
        return new Date (Date.now()).getFullYear() - this._birthYear.getFullYear()
    }
    get fullName () : string {
        return `${this._lastName} ${this._firstName}`
    }
    set fullName (fullName : string) {
        const RE = /^([a-zA-Z']+)\s{1}([a-zA-Z']+)$/i
        if ( RE.test ( fullName ) )
            [this._lastName , this._firstName] = fullName.split (' ')
    }
    set grade (grade : TGrade) {
        this._grades.push (grade)
    }
    set visit (visit : TVisit) {
        this._visits.push (visit)
    }

    constructor (
        private _firstName : string ,
        private _lastName : string ,
        private _birthYear : Date
    ) {}

    getPerformanceRating () : number {
        const gradeValues : Array <number> = this._grades.flatMap (grade => Object.values (grade))
        
        if (!gradeValues.length) {
            return 0
        }
        else {
            const averageGrade : number = gradeValues.reduce ((sum , grade) => sum + grade , 0) / gradeValues.length
            
            const attendanceValues : Array <boolean> = this._visits.flatMap (present => Object.values (present))
            const attendancePercentage : number = (
                attendanceValues.filter(present => present)
                    .length / this._visits.length
                ) * 100
            
            return (averageGrade + attendancePercentage) / 2
        }
    }
}