FROM ruby:2.4

WORKDIR /usr/src/app

# see http://stackoverflow.com/questions/38453963/gitlab-ci-setup-error-could-not-find-a-javascript-runtime
RUN apt-get update && apt-get install nodejs locales -y

COPY Gemfile /usr/src/app/
RUN bundle install

RUN locale-gen en_US.UTF-8
ENV LANG en_US.UTF-8
ENV LANGUAGE en_US:en
ENV LC_ALL en_US.UTF-8
