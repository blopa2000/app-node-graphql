import tasks from "./tasks";
export const resolvers = {
  Query: {
    hello: () => {
      return "hello world";
    },
    greet(root, { name }, context) {
      console.log(context);
      return "hello!" + name;
    },
    tasks() {
      return tasks;
    },
  },
  Mutation: {
    createTask(_, { input }) {
      tasks.push({ ...input, _id: tasks.length });
      return tasks;
    },
  },
};
