import Courses from "../models/courses";

export default {
  Query: {
    async getCourses(_, args, { models }) {
      return await models.Courses.find();
    },
    async getCourse(root, { _id }, { models }) {
      return await models.Courses.findOne({ _id });
    },
  },

  Mutation: {
    async createCourse(_, { input }) {
      const newCourse = new Courses(input);
      return await newCourse.save();
    },
    async createTeacher(_, { input }, { models }) {
      const newTeacher = new models.Teachers(input);
      return await newTeacher.save();
    },
  },
};
