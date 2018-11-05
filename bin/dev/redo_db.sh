#!/usr/bin/env bash

rake db:drop
rake db:create
rake db:schema:load
rake db:migrate
rake db:seed