git reset 撤销git add操作
git reset HEAD~1 撤销git commit操作 注意git reset 会修改提交历史
git reset HEAD~1或gie revert 可以撤销对上一次的本地仓库的提交
git revert 生产一个新的提交来撤销某次提交 也适用于已经提交到了远程的操作
git reflog 可以显示所有操作的历史记录，包括 git revert 操作
git checkout -b master 创建一个新分支master并切换
git checkout master 切换到master分支
git commit --amend 已经提交了但需要修改提交信息
git remote add origin 添加远程仓库
git remote remove 删除远程仓库
git remote set-url 修改远程仓库url
git remote rename a b 将远程仓库的名字从a变为b
git push origin main 将本地 main 分支的更改推送到 origin 仓库
git pull origin main 从 origin 仓库的 main 分支拉取最新更改