import Courses from "../models/courses";

export default {
  Query: {
    async getCourses() {
      return await Courses.find();
    },
    async getCourse(root, { _id }, context) {
      console.log(context);
      return await Courses.findOne({ _id });
    },
  },
};
