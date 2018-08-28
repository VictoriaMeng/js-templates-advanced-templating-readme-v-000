function loadIssue() {
<<<<<<< HEAD
  var issue = {
    state: "closed",
    number: 5,
    created_at: "2016-03-31 16:23:13 UTC",
    body: "Instructions say GET /team and POST /newteam. Rspec wants GET/newteam and POST/team."
  }

  var template = Handlebars.compile(document.getElementById("issue-template").innerHTML);
  var result = template(issue);
=======
  var template = Handlebars.compile(document.getElementById("issue-template").innerHTML);
  var result = template(issues);
>>>>>>> 1904419a7670335fbf5309e94bfa5e0e4b5e65a1
  document.getElementsByTagName("main")[0].innerHTML += result;
}
