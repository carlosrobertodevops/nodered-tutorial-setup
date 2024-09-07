module.exports = {
  editorTheme: {
    projects: {
      enabled: true
    },
  },
  adminAuth: {
    type: "credentials",
    users: [
      {
        username: "nodered",
        // docker exec -it nodered-ew node-red-admin hash-pw
        password: "$2y$08$Z2Xt/E42y/jwaaSsScdSru7qtgGhC9Wfq4F8/V/fbBxhodqwHr07.",
        permissions: "*"
      }
    ]
  },
  userDir: "/data",
};