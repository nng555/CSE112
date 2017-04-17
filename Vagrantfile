Vagrant.configure(2) do |config|

  config.vm.define "cse112" do |cse112|
    cse112.vm.box = "ubuntu/trusty64"
    cse112.vm.hostname = "cse112"
    cse112.vm.network "private_network", ip: "10.1.1.11", netmask: "24"
    cse112.vm.network "forwarded_port", guest: 3000, host: 9999 
    cse112.vm.provision :shell, path: "setup.sh"
  end
end
