# config valid only for current version of Capistrano
lock '3.4.0'
set :application, 'towers'
set :repo_url, 'git@github.com:briansimoni/towers-of-hanoi.git'
set :branch, 'master'
set :deploy_via, :remote_cache
set :keep_releases, 2

# namespace :deploy do

#   after :restart, :clear_cache do
#     on roles(:web), in: :groups, limit: 3, wait: 10 do
#       # Here we can do anything such as:
#       # within release_path do
#       #   execute :rake, 'cache:clear'
#       # end
#     end
#   end

# end
