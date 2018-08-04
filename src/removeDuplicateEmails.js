export default function removeDuplicateEmails(emails) {
  let emailHash = {};
  const newEmailList = [];

  for (let i = 0;i < emails.length;i++) {
    if (!emailHash[emails[i]]) {
      emailHash[emails[i]] = emails[i];
      newEmailList.push(emails[i]);
    }
  }

  return newEmailList;
}
