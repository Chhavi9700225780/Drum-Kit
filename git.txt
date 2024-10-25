CLI
___

* it's a good idea to update your access token on Github.  Go to your account and click the logo, it's under settings.

At the bottom of the list on the left is developer settings.

Create a new Classic "Personal Access Token"

username = what you set up as --global config
password = this unique access token (be sure to save it).


$ git config --global user.name "kappa"
$ git config --global user.email "kappajester83@gmail.com"
$ git config --global color.ui auto
$ git config --global pull.rebase false

  Go to Github and Fork the original repo
  Copy your new forked link under Code

$ git clone https://github.com/Kapaajester83/Drum-Kit.git

$ ~cd to new file directory

 * I renamed it at this time to lower case, just a personal preference

kappa@kappa-Aspire-Z5600:~/Documents/Hacktoberfest 2024/drum-kit$ git remote -v
origin	https://github.com/Kapaajester83/Drum-Kit.git (fetch)
origin	https://github.com/Kapaajester83/Drum-Kit.git (push)

kappa@kappa-Aspire-Z5600:~/Documents/Hacktoberfest 2024/drum-kit$ touch .gitignore

kappa@kappa-Aspire-Z5600:~/Documents/Hacktoberfest 2024/drum-kit$ touch git.txt

kappa@kappa-Aspire-Z5600:~/Documents/Hacktoberfest 2024/drum-kit$ ls -al
total 888
drwxrwxr-x 4 kappa kappa   4096 Oct 25 14:35  .
drwxrwxr-x 4 kappa kappa   4096 Oct 25 14:01  ..
-rw-rw-r-- 1 kappa kappa 873458 Oct 25 14:00 'background (1).jpg'
drwxrwxr-x 8 kappa kappa   4096 Oct 25 14:10  .git
-rw-rw-r-- 1 kappa kappa      0 Oct 25 14:03  .gitignore
-rw-rw-r-- 1 kappa kappa   3768 Oct 25 14:35  git.txt
-rw-rw-r-- 1 kappa kappa   2963 Oct 25 14:00  index.html
-rw-rw-r-- 1 kappa kappa   1107 Oct 25 14:00  README.md
drwxrwxr-x 2 kappa kappa   4096 Oct 25 14:00  sounds
-rw-rw-r-- 1 kappa kappa    902 Oct 25 14:00  style.css

kappa@kappa-Aspire-Z5600:~/Documents/Hacktoberfest 2024/drum-kit$ git status
On branch main
Your branch is up to date with 'origin/main'.

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	.gitignore
	git.txt

nothing added to commit but untracked files present (use "git add" to track)
kappa@kappa-Aspire-Z5600:~/Documents/Hacktoberfest 2024/drum-kit$ git add .

kappa@kappa-Aspire-Z5600:~/Documents/Hacktoberfest 2024/drum-kit$ git commit -m "stage git docs"
[main f59f271] stage git docs
 2 files changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 .gitignore
 create mode 100644 git.txt

kappa@kappa-Aspire-Z5600:~/Documents/Hacktoberfest 2024/drum-kit$ git status
On branch main
Your branch is ahead of 'origin/main' by 1 commit.
  (use "git push" to publish your local commits)

nothing to commit, working tree clean

kappa@kappa-Aspire-Z5600:~/Documents/Hacktoberfest 2024/drum-kit$ git remote -v
origin	https://github.com/Kapaajester83/Drum-Kit.git (fetch)
origin	https://github.com/Kapaajester83/Drum-Kit.git (push)

kappa@kappa-Aspire-Z5600:~/Documents/Hacktoberfest 2024/drum-kit$ git push -u origin master
error: src refspec master does not match any
error: failed to push some refs to 'https://github.com/Kapaajester83/Drum-Kit.git'

kappa@kappa-Aspire-Z5600:~/Documents/Hacktoberfest 2024/drum-kit$ git push -u origin main
Username for 'https://github.com': kappa
Password for 'https://kappa@github.com': 
Enumerating objects: 4, done.
Counting objects: 100% (4/4), done.
Delta compression using up to 2 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 282 bytes | 282.00 KiB/s, done.
Total 3 (delta 1), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
To https://github.com/Kapaajester83/Drum-Kit.git
   1d6697d..f59f271  main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
kappa@kappa-Aspire-Z5600:~/Documents/Hacktoberfest 2024/drum-kit$ 

https://kapaajester83.github.io
https://github.com/Kapaajester83
