type UserSliceType = {
  isLoggedIn: boolean,
  isExist: boolean,
  userInfo: UserType,
  isLoading: boolean,
  errorMessage: string,
  patientEmail: string
}

type UserType = {
  token: string | null,
  email: string | null,
  name: string | null,
  photoUrl: string | null,
}

type UserInputType = {
  age: string,
  email: string | null,
  gender: string,
  phone_number: string,
}

type JournalSliceType = {
  journals: [],
  journalDetail: any,
  isLoading: boolean,
  errorMessage: string
}

type JournalType = {
  date: string,
  title: string,
  text: string,
  mood: string,
  user_email: string | null,
}

type JournalInputType = {
  title: string,
  text: string,
  mood: string,
  user_email: string,
}

type ScheduleSliceType = {
  schedules: [],
  scheduleDetail: any,
  isLoading: boolean,
  errorMessage: string,
  isBooked: boolean
}

type CircleSliceType = {
  circles: [],
  circlesDetail: any,
  isLoading: boolean,
  errorMessage: string,
  isMine: boolean,
  amIMember: boolean,
  isFull: boolean
}