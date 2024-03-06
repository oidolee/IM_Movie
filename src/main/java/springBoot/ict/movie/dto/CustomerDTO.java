package springBoot.ict.movie.dto;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="IM_Customer")	// 생략시 table or view not found
public class CustomerDTO {
	
	private String email; 
	private String name;
	private String password;
	private String hp;
	private Date birthday;
	private String address;
	private Date regdate;
	private String show;
	
	
	@Id
	public String getEmail() {
		return email;
	}
	
	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public String getPassword() {
		return password;
	}
	
	public void setPassword(String password) {
		this.password = password;
	}
	
	public String getHp() {
		return hp;
	}
	
	public void setHp(String hp) {
		this.hp = hp;
	}
	
	public Date getBirthday() {
		return birthday;
	}
	
	public void setBirthday(Date birthday) {
		this.birthday = birthday;
	}
	
	public Date getRegdate() {
		return regdate;
	}
	
	public void setRegdate(Date regdate) {
		this.regdate = regdate;
	}
	
	public String getShow() {
		return show;
	}
	
	public void setShow(String show) {
		this.show = show;
	}

	@Override
	public String toString() {
		return "CustomerDTO [email=" + email + ", name=" + name + ", password=" + password + ", hp=" + hp
				+ ", birthday=" + birthday + ", address=" + address + ", regdate=" + regdate + ", show=" + show + "]";
	}
	
	

}
