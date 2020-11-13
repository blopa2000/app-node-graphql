export default {
  Query: {
    async getCourses(_, args, { models }) {
      return await models.Courses.find();
    },

    async getCourse(root, { _id }, { models }) {
      return await models.Courses.findOne({ _id });
    },

    async getTeachers(_, args, { models }) {
      return await models.Teachers.find();
    },

    async getTeacher(_, { id }, { models }) {
      return await models.Teachers.findById(id);
    },
  },

  Mutation: {
    async createCourse(_, { input }, { models }) {
      const newCourse = new models.Courses(input);
      const saveCourse = await newCourse.save();

      await models.Teachers.updateOne(
        { _id: input.teacher },
        { $push: { courses: saveCourse._id } }
      );

      return saveCourse;
    },

    async createTeacher(_, { input }, { models }) {
      const newTeacher = new models.Teachers(input);
      return await newTeacher.save();
    },

    async updateTeacher(_, { id, input }, { models }) {
      return await models.Teachers.findOneAndUpdate(
        { _id: id },
        { $set: { ...input } },
        { new: true }
      );
    },

    async updateCourse(_, { id, input }, { models }) {
      return await models.Courses.findOneAndUpdate(
        { _id: id },
        { $set: { ...input } },
        { new: true }
      );
    },

    async DeleteCourse(_, { idCourse, idTeacher }, { models }) {
      await models.Teachers.updateOne({ _id: idTeacher }, { $pull: { courses: idCourse } });
      await models.Courses.deleteOne({ _id: idCourse });
      return await models.Courses.find();
    },
  },

  Courses: {
    async teacher({ teacher }, args, { models }) {
      return await models.Teachers.findById(teacher);
    },
  },

  Teachers: {
    async courses({ courses }, args, { models }) {
      const allCourses = [];
      for (const course of courses) {
        const data = await models.Courses.findOne({ _id: course });
        allCourses.push(data);
      }
      return allCourses;
    },
  },
};
